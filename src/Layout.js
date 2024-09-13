import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Component/Sidebar/Sidebar";
import RightSidebar from "./Component/Sidebar/RightSidebar";
import { Col, Row } from "reactstrap";

const Layout = () => {
  return (
    <div>
      <Row className="m-0 p-0">
        <Col lg={3} md={4}>
          <Sidebar />
        </Col>
        <Col lg={6} md={8} className="pe-0">
          <main className="main">
            <Outlet />
          </main>
        </Col>
        <Col lg={3} className="d-lg-block p-0 d-none" style={{maxWidth: "100%"}}>
          <RightSidebar />
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
