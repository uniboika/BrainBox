import React, { useEffect, useState } from "react";
import StoryRow from "./StoryRow";
import { FaImage, FaSmile, FaClipboard } from "react-icons/fa";
import Picker from "emoji-picker-react";

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
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import "./home.css";
import { FaLocationPin } from "react-icons/fa6";

export default function Home() {
  const [activeTab, setActiveTab] = useState("foryou");
  const [isSticky, setIsSticky] = useState(false);

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
 const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [location, setLocation] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Image selected:", file.name);
      // Handle image upload logic
    }
  };

  const handleEmojiSelect = (event, emojiObject) => {
    setSelectedEmoji(emojiObject.emoji);
    setShowEmojiPicker(false);
    console.log("Selected Emoji:", emojiObject.emoji);
    // Add emoji to your text input or content
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("Your content here")
      .then(() => {
        console.log("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`Lat: ${position.coords.latitude}, Long: ${position.coords.longitude}`);
          console.log("Location:", position.coords);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Nav className={` ${isSticky ? "isSticky" : ""} row header shadow-sm`}>
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
      {/* <div>Home</div> */}

      <div className="yourmind mt-3 p-3">
        <div className="yourmind-header  d-flex align-items-center">
          <img
            src={dp}
            alt="dp"
            className="rounded-circle"
            width="60px"
            height="60px"
          />
          <Input
            type="text"
            placeholder="what's happening"
            className="form-control-plaintext rounded-pill ms-2 p-2"
          />
        </div>

        <div className="yourmind-bottom d-flex justify-content-between p-3">
          <div className="icons">
            {/* Image Upload */}
            <label>
              <FaImage />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
            </label>

            {/* Emoji Picker */}
            <FaSmile onClick={() => setShowEmojiPicker(!showEmojiPicker)} />
            {showEmojiPicker && (
              <div style={{ position: "absolute", zIndex: 1 }}>
                <Picker onEmojiClick={handleEmojiSelect} />
              </div>
            )}

            {/* Clipboard */}
            <FaClipboard onClick={handleCopyToClipboard} />

            {/* Location */}
            <FaLocationPin onClick={handleGetLocation} />
          </div>

          <div className="post">
            <button
              type="submit"
              className="px-4 py-2 rounded-pill"
              style={{
                backgroundColor: "var(--red-color)",
                color: "var(--text-color)",
                border: "none",
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>

      <br />
      <div className="mt-4">
        {activeTab === "foryou" && <ForYouPage />}
        {activeTab === "following" && <FollowingPage />}
      </div>
    </>
  );
}
