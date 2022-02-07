import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// layout
import AppLayout from "@src/components/layout";

// pages
import Home from "@src/pages/Home";
import Login from "@src/pages/Login";
import Signup from "@src/pages/Signup";
import NotFound from "@src/pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
