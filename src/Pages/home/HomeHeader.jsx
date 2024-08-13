import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import ForYouPage from "./ForYouPage";
import FollowingPage from "./FollowingPage";

const HomeHeader = () => {
  const [activeTab, setActiveTab] = useState("foryou");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="mb-4">
      <Nav>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "foryou" })}
            onClick={() => toggleTab("foryou")}
          >
            For You
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "following" })}
            onClick={() => toggleTab("following")}
          >
            Following
          </NavLink>
        </NavItem>
      </Nav>
      <div className="mt-4">
        {activeTab === "foryou" && <ForYouPage />}
        {activeTab === "following" && <FollowingPage />}
      </div>
    </div>
  );
};

export default HomeHeader;
