import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Component/Sidebar/Sidebar";
import RightSidebar from "./Component/Sidebar/RightSidebar";
import { Col, Row } from "reactstrap";

const Layout = () => {
  return (
    <div>
      <Row className="m-0 p-0">
        <Col lg={3} md={4} >
          <Sidebar />
        </Col>
        <Col lg={5} md={8}>
          <main>
            <Outlet />
          </main>
        </Col>
        <Col lg={4} className="d-lg-flex d-none">
          <RightSidebar />
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
