import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import FastFind from "./pages/FastFind";
import DetailedFind from "./pages/DetailedFind";
import QueryResultPage from "./pages/QueryResultPage";
import ReportPage from "./pages/ReportPage";
import Profile from "./pages/Profile";
import DownloadReportPage from "./pages/DownloadReportPage";

function App() {
  return (
    <div>
      <Router>
        <div className='container'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/profile' element={<Profile/>} />

            <Route path='/fastFind/:itemForSearch' element={<FastFind/>} />
            <Route path='/detailedFind/:itemForSearch' element={<DetailedFind/>} />
            <Route path='/fastFind' element={<FastFind/>} />
            <Route path='/detailedFind' element={<DetailedFind/>} />

            <Route path='/queryResultPage' element={<QueryResultPage/>} />

            <Route path='/reportPage' element={<ReportPage/>} />
            <Route path='/downloadReportPage' element={<DownloadReportPage/>} />
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
