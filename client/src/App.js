import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCallback, useEffect} from 'react';
import Home from "./pages/Home";
import Loader from "./coponents/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, SetPortfolioData, ShowLoading , ReloadData } from "./redux/rootSlice";
import Admin from "./pages/Admin";
import Login from "./pages/Admin/Login";
import React from "react";

function App() {
  const { loading, portfolioData , reloadData} = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = useCallback(async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading())
    } catch (error) {
      dispatch(HideLoading())

    }
  }, [dispatch]);
  
  useEffect(() => {
      if(!portfolioData){
        getPortfolioData();
      }
  }, [portfolioData, getPortfolioData]);

  useEffect(()=>{
    if(reloadData){
      getPortfolioData();
    }
  },[reloadData , getPortfolioData])


  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
