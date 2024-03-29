import React from "react";
import Header from "./components/common/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
