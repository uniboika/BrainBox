import React, { useState } from "react";
import StoryRow from "./StoryRow";

import logo2 from "../../assets/logo2.jpg";
import logo from "../../assets/logo.png";
import dp from "../../assets/dp.jpg";
import me from "../../assets/babale.jpeg";
import bigbro from "../../assets/bigbro.jpg";
import yusuf from "../../assets/yusuf.jpg";
import mac from "../../assets/mac.jpg";
import mate from "../../assets/class mate.jpg";
import chiken from "../../assets/chicken.jpg";
import nagudu from "../../assets/nagudu.JPG";
import auwal from "../../assets/yaauwal.JPG";
import fam from "../../assets/fam.jpg";
import latest from "../../assets/latest.jpg";
import dadi from "../../assets/dadi.JPG";
import bihub from "../../assets/bihub.JPG";
import abbaboss from "../../assets/abbaboss.JPG";
import ForYouPage from "./ForYouPage";
import FollowingPage from "./FollowingPage";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import "./home.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("foryou");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  const stories = [
    {
      username: "Nazif Abdullahi",
      profileImage: dp,
      storyImage: me,
    },
    {
      username: "user1",
      profileImage: logo2,
      storyImage: logo2,
    },
    {
      username: "Auwal Tee",
      profileImage: auwal,
      storyImage: bigbro,
    },

    {
      username: "Muhammad Abdullahi",
      profileImage: abbaboss,
      storyImage: bihub,
    },
    {
      username: "Abdulsalam Abubakar",
      profileImage: dadi,
      storyImage: nagudu,
    },
    {
      username: "Shalom Uniboika",
      profileImage: latest,
      storyImage: fam,
    },
    {
      username: "Yusuf Abdulslam",
      profileImage: yusuf,
      storyImage: mate,
      storyImage: logo,
    },
    {
      username: "Sadik Abubakar",
      profileImage: mac,
      storyImage: chiken,
    },
  ];

  return (
    <>
      <Nav className="row header shadow-sm">
        <div
          className="header-content col-6"
          style={{ borderRight: "1px solid #dfdfdf" }}
          onClick={() => toggleTab("foryou")}
        >
          <NavItem>
            <NavLink
              className={`${classnames({
                active: activeTab === "foryou",
              })} header-link`}
            >
              For You
            </NavLink>
          </NavItem>
        </div>
        <div
          className="header-content col-6"
          onClick={() => toggleTab("following")}
        >
          <NavItem>
            <NavLink
              className={`${classnames({
                active: activeTab === "following",
              })} header-link`}
            >
              Following
            </NavLink>
          </NavItem>
        </div>
      </Nav>

      <StoryRow stories={stories} />
      <div>Home</div>

      <br />
      <div className="mt-4">
        {activeTab === "foryou" && <ForYouPage />}
        {activeTab === "following" && <FollowingPage />}
      </div>
    </>
  );
}
