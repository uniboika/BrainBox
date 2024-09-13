import React from "react";
import { Link } from "react-router-dom";
import dp from "../../assets/dp.jpg";
import logo2 from "../../assets/logo2.jpg";
import auwal from "../../assets/yaauwal.JPG";
import abbaboss from "../../assets/abbaboss.JPG";
import "./sidebar.css"

export default function RightSidebar() {
  const dday = new Date().getFullYear();
  const ads = [
    {
      name: "Brainbox earn money by liking and tweeting",
      image: logo2,
      url: "https://brainbox.com",
    },
    {
      name: "Uniboika creates website",
      image: dp,
      url: "https://uniboika.com",
    },
  ];
  const posts = [
    {
      author: "Nazif Abdullahi",
      profileImage: dp,
      userName: "@Uniboika",
    },
    {
      author: "Brain Box",
      profileImage: logo2,
      userName: "@brainbox",
    },
    {
      author: "Auwal Tijjani",
      profileImage: auwal,
      userName: "@auwaltee",
    },

    {
      author: "Muhammad Abdullahi",
      profileImage: abbaboss,
      userName: "@abbaboss",
    },
  ];
  return (
    <>
      <div className="right-sidebar">
        <h6 className="text-secondary my-3 ms-3">Sponsored Ads</h6>
        {ads?.map((sponsored, id) => (
          <Link key={id} to={sponsored.url}>
            <div className="mb-3 d-flex ads ms-3">
              <img
                src={sponsored.image}
                className="rounded"
                width={"80px"}
                height={"auto"}
                style={{ objectFit: "cover" }}
                // className="rounded me-5"
                alt={sponsored.name}
              />
              <p
                className="ms-2 align-self-center text-dark"
                style={{
                  maxWidth: "65%",
                  fontWeight: "bold",
                  fontFamily: "arial",
                }}
              >
                {sponsored.name} <br />
                <span
                  className="mt-3 text-secondary"
                  style={{ fontSize: "14px" }}
                >
                  {sponsored.url}
                </span>
              </p>
            </div>
          </Link>
        ))}
        <div className="hr"></div>
        <div className="suggest mx-3 mt-3">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h6 className="text-secondary">Suggested for you</h6>
            <Link
              to={"/notification"}
              className="text-dark"
              style={{ fontWeight: "600", fontSize: "16px" }}
            >
              See All
            </Link>
          </div>
          {posts.map((post, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-start mb-2 "
            >
              <div className="d-flex">
                <img
                  src={post.profileImage || "path/to/default-profile.jpg"}
                  alt={post.profileImage || "Unknown User"}
                  className="rounded-circle"
                  width="42px"
                  height="42px"
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
                <div className="user-details">
                  <p
                    className="ms-2 mb-0 fw-bold d-flex align-items-center"
                    style={{ fontSize: "17px", fontFamily: "arial" }}
                  >
                    {post.author}
                  </p>
                  <p
                    className="ms-2 text-secondary"
                    style={{
                      fontSize: "14px",
                      fontFamily: "arial",
                      textTransform: "lowercase",
                    }}
                  >
                    {post.userName}
                  </p>
                </div>
              </div>
              <div className="me-3">Follow</div>
            </div>
          ))}
        </div>
        <div className="mx-3">
          <ul className="footer text-secondary">
            <li>About</li>
            <li>Help</li>
            <li>press</li>
            <li>API</li>
            <li>Jobs</li> <li>Privacy</li>
          </ul>
          <ul className="footer text-secondary">
            <li>Terms</li>
            <li>Locations</li>
            <li>Language</li>
            <li>ads</li>
            <li>withrawal</li>
          </ul>
          <ul className="footer text-secondary">
            <li>Language</li>
          </ul>
          <h6 className="mt-3 text-secondary" style={{ fontSize: "14px" }}>
            Copyright &copy;{dday} BrainBox
          </h6>
        </div>
      </div>
    </>
  );
}
