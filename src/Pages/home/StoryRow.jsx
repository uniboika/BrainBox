import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function StoryRow({ stories }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStory, setCurrentStory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  useEffect(() => {
    if (isOpen) {
      const img = new Image();
      img.src = stories[currentStory].storyImage;
      img.onload = () => setIsLoading(false);
    }
  }, [isOpen, currentStory]);

  return (
    <div>
      <Slider {...settings}>
        {stories.map((story, index) => (
          <div
            className="story-container"
            key={index}
            onClick={() => {
              setCurrentStory(index);
              setIsOpen(true);
            }}
          >
            <img
              src={story.profileImage || "path/to/default-image.jpg"}
              alt={story.username}
              className="story-image"
            />
            <div
              className="story-text"
            >
              {story.username || "Unknown"}{" "}
            </div>
          </div>
        ))}
      </Slider>

      {isOpen && (
        <Lightbox
          mainSrc={
            stories[currentStory].storyImage ||
            "path/to/default-story-image.jpg"
          }
          nextSrc={stories[(currentStory + 1) % stories.length].storyImage}
          prevSrc={
            stories[(currentStory + stories.length - 1) % stories.length]
              .storyImage
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setCurrentStory(
              (currentStory + stories.length - 1) % stories.length
            )
          }
          onMoveNextRequest={() =>
            setCurrentStory((currentStory + 1) % stories.length)
          }
        />
      )}
    </div>
  );
}
