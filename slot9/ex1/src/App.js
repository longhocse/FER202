import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBarPizza from "./components/NavBarPizza";
import DangKyForm from "./components/DangKyForm";
import Home from "./components/Home";
import SlideBar from "./components/SlideBar";
import NewList from "./pages/NewList";


// ✅ thêm quiz
import QuizPage from "./pages/QuizPage";
import QuizProvider from "./context/QuizContext";

function App() {
  return (
    <Router>
      <QuizProvider>
        {/* Thanh điều hướng cho ứng dụng đặt pizza */}
        <NavBarPizza />
        <SlideBar />

        {/* Điều hướng ứng dụng */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<DangKyForm />} />
          <Route path="/news" element={<NewList />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </QuizProvider>
    </Router>
  );
}

export default App;
