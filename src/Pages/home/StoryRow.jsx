import React, { useState } from "react";
import { Modal, ModalBody, Button, CardText, Row, Col } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function StoryCarousel({ stories }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleModal = () => setModalOpen(!modalOpen);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const handleStoryClick = (index) => {
    setCurrentIndex(index);
    toggleModal();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );
  };

  const { profileImage, username, storyImage, caption } =
    stories[currentIndex] || {};

  return (
    <div>
      {/* Slider for Story Thumbnails */}
      <Slider {...settings}>
        {stories.map((story, index) => (
          <div
            key={index}
            className="story-container"
            onClick={() => handleStoryClick(index)}
            style={{ padding: 10, cursor: "pointer", textAlign: "center" }}
          >
            <img
              src={story.profileImage || "path/to/default-profile.jpg"}
              alt={story.username || "User"}
              className="story-image"
              loading="lazy"
            />
            <div className="story-text">{story.username || "Unknown"} </div>
          </div>
        ))}
      </Slider>

      {/* Modal for Story Viewer */}
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        size="lg"
        style={{ position: "relative", maxWidth: "600px", maxHeight: "500px" }}
      >
        <ModalBody>
          <Button
            color="secondary"
            onClick={toggleModal}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              zIndex: 1000,
            }}
          >
            Close
          </Button>
          <Row
            style={{ position: "absolute", top: 10, left: 10, zIndex: 1000 }}
          >
            <Col xs="auto">
              <img
                src={profileImage || "path/to/default-profile.jpg"}
                alt={username || "User"}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "2px solid #E1306C",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col xs="auto" style={{ marginLeft: 10 }}>
              <strong>{username || "Unknown"}</strong>
            </Col>
          </Row>
          <Button
            color="primary"
            onClick={handlePrevious}
            style={{
              position: "absolute",
              top: "50%",
              left: 10,
              zIndex: 1000,
              transform: "translateY(-50%)",
            }}
          >
            Previous
          </Button>
          <Button
            color="primary"
            onClick={handleNext}
            style={{
              position: "absolute",
              top: "50%",
              right: 10,
              zIndex: 1000,
              transform: "translateY(-50%)",
            }}
          >
            Next
          </Button>
          <img
            src={storyImage || "path/to/default-story.jpg"}
            alt="Story"
            style={{ width: "100%", height: "100%" }}
          />
          <CardText className="text-center">
            <small>{caption || "No caption"}</small>
          </CardText>
        </ModalBody>
      </Modal>
    </div>
  );
}
