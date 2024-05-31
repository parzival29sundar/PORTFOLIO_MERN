import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Input, Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";

function AdminProjects() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(null);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
        const tempTechnologies =values.technologies.split(",").map(technologies => technologies.trim());
        values.technologies =  tempTechnologies;
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-project", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-project", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message, 2);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message, 2);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-project", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const openAddProjectModal = () => {
    setShowAddEditModal(true);
    setSelectedItemForEdit(null); // Reset selectedItemForEdit
    setType("add"); // Set type to "add"
  };

  const openEditProjectModal = (project) => {
    setSelectedItemForEdit(project);
    setShowAddEditModal(true);
    setType("edit");
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={openAddProjectModal}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 sm:grid-cols-1">
        {projects.map((project) => (
          <div className="shadow border border-gray-300 p-5 flex flex-col gap-4">
            <h1 className="text-primary text-xl">{project.title}</h1>
            <hr />
            <img src={project.image} alt=""  className="h-60 w-72"/>
            <h1>Role : {project.title}</h1>
            <h1>{project.description}</h1>
            <div className="flex justify-end gap-3 mt-8">
              <button
                className="bg-secondary text-white px-5 py-3 rounded-[5px] "
                onClick={() => openEditProjectModal(project)}
              >
                Edit
              </button>
              <button
                className="bg-primary text-white px-7 py-3 rounded-[5px] "
                onClick={() => {
                  onDelete(project);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {(type === "add" || selectedItemForEdit) && (
        <Modal
          open={showAddEditModal}
          title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
                ...selectedItemForEdit,
                technologies:  selectedItemForEdit?.technologies.join(" , ")
            } || {}}
          >
            <Form.Item name="title" label="Title">
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item name="image" label="Image URL">
              <Input placeholder="Image" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <textarea placeholder="Description" />
            </Form.Item>
            <Form.Item name="link" label="Link">
              <Input placeholder="Link" />
            </Form.Item>
            <Form.Item name="technologies" label="Technologies">
              <Input placeholder="Technologies" />
            </Form.Item>

            <div className="flex justify-end">
              <button
                className="border-primary text-primary px-5 py-3"
                onClick={() => {
                  setShowAddEditModal(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              <button className="bg-primary text-white px-5 py-1">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminProjects;


