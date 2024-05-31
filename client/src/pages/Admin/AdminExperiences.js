import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Input, Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";

function AdminExperiences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const [showAddEditModal, setShowAddEditModal] = React.useState(null);
  const [selectedItemForEdit, setSelectedItemForEdit] = React.useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        response = await axios.post("/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-experience", values);
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
      const response = await axios.post("/api/portfolio/delete-experience", {
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

  const openAddExperienceModal = () => {
    setShowAddEditModal(true);
    setSelectedItemForEdit(null); // Reset selectedItemForEdit
    setType("add"); // Set type to "add"
  };

  const openEditExperienceModal = (experience) => {
    setSelectedItemForEdit(experience);
    setShowAddEditModal(true);
    setType("edit");
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={openAddExperienceModal}
        >
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5 sm:grid-cols-1">
        {experiences.map((experience) => (
          <div className="shadow border border-gray-300 p-5 flex flex-col">
            <h1 className="text-primary text-xl">{experience.period}</h1>
            <hr />
            <h1 className="font-medium">Company : {experience.company}</h1>
            <h1>Role : {experience.title}</h1>
            <h1>{experience.description}</h1>
            <div className="flex justify-end gap-3 mt-8">
              <button
                className="bg-secondary text-white px-5 py-3 rounded-[5px] "
                onClick={() => openEditExperienceModal(experience)}
              >
                Edit
              </button>
              <button
                className="bg-primary text-white px-7 py-3 rounded-[5px] "
                onClick={() => {
                  onDelete(experience);
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
            initialValues={selectedItemForEdit || {}}
          >
            <Form.Item name="period" label="Period">
              <Input placeholder="Period" />
            </Form.Item>
            <Form.Item name="company" label="Company">
              <Input placeholder="Company" />
            </Form.Item>
            <Form.Item name="title" label="Title">
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input placeholder="Description" />
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

export default AdminExperiences;


