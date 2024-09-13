import React, { useState } from "react";
import { FaComment, FaHeart, FaRegHeart, FaShare } from "react-icons/fa";
import { FaRegComment, FaRegShareFromSquare } from "react-icons/fa6";
import { HiHeart } from "react-icons/hi";

export default function Post({ posts }) {
  const [react, setReact] = useState(false);

  const toggleReact = () => {
    setReact(!react);
  };

  return (
    <>
      <div className="post-container">
        {posts.map((post, index) => (
          <div key={index} className="post mb-4">
            {/* Post Header */}
            <div className="d-flex justify-content-between align-items-start">
              <div className="d-flex">
                <img
                  src={post.profileImage || "path/to/default-profile.jpg"}
                  alt={post.username || "Unknown User"}
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

                    <span
                      className="text-secondary d-flex ms-1"
                      style={{
                        fontSize: "14px",
                        fontFamily: "arial",
                        textTransform: "lowercase",
                      }}
                    >
                      {post.userName}{" "}
                      <span style={{ textTransform: "capitalize" }}>
                        <span className="m-1">.</span> {post.date}
                      </span>
                    </span>
                  </p>
                  <p className="ms-2" style={{ maxWidth: "70%" }}>
                    {post.caption}
                  </p>
                </div>
              </div>
              <div className="me-3">...</div>
            </div>
            {/* <div class="bg-light p-2">
              <div class="d-flex">
                <img
                  src={post.profileImage || "path/to/default-profile.jpg"}
                  alt={post.username || "Unknown User"}
                  width="42px"
                  height="42px"
                  class="rounded-circle"
                  style={{objectFit: "cover"}}
                />
                <p class="b ms-2">
                  Nazif abdullahi
                  <img
                    src="./images/icons8_verified_badge_48px.png"
                    alt="ver"
                    width="20px"
                    height="20px"
                  />
                  <span
                    class="text-secondary bg-light"
                    style="font-size: 0.9em; font-weight: normal"
                  >
                    @nazif_official . 1m
                  </span>
                  <br />
                  <span
                    style="font-size: 1em; font-weight: normal"
                    class="bg-light"
                  >
                    I 💗 Nigeria
                  </span>
                </p>
              </div>
              <img
                src="./images/IMG_6742.JPG"
                alt="me"
                width="60%"
                height="auto"
                class="rounded ms-5"
              />
            </div> */}

            {/* Post Image */}
            <div className="post-img ms-5">
              <img
                src={post.postImage}
                alt={post.username}
                loading="lazy"
                className="rounded "
                width={"70%"}
                height={"auto"}
              />
              <div
                className="d-flex justify-content-between m-2"
                style={{ maxWidth: "70%" }}
              >
                <div className="like" onClick={toggleReact}>
                  {react ? <FaHeart /> : <FaRegHeart className="icon" />} 150
                </div>
                <div className="comment" onClick={toggleReact}>
                  {react ? <FaComment /> : <FaRegComment className="icon" />}{" "}
                  200
                </div>
                <div className="like" onClick={toggleReact}>
                  {react ? (
                    <FaShare />
                  ) : (
                    <FaRegShareFromSquare className="icon" />
                  )}
                  50
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
