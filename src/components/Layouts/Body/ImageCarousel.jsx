import React, { useState } from "react";
import "./ImageCarousel.css"; // Custom CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ImageCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "../../../../public/Images/1.jpg",
    "../../../../public/Images/2.jpg",
    "../../../../public/Images/3.jpg",
    "../../../../public/Images/4.jpg",
    "../../../../public/Images/5.jpg",
    "../../../../public/Images/6.jpg",
    "../../../../public/Images/7.jpg",
    "../../../../public/Images/9.jpg",
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 gallery-heading">
      The Asia Business Show Singapore 2024
      </h2>

      <p className="text-muted mx-auto mt-3 section1-content section1-content-p">
        Driven to be future-ready, and push beyond the building blocks of
        technology, digital, and marketing, Ahaan Software Consulting proudly
        participated in The Asia Business Show 2024 in Singapore—the powerhouse
        of innovation and enterprise!
      </p>
      <div className="row g-4">
        {images.map((image, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className="image-container" onClick={() => openModal(image)}>
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="img-fluid gallery-image"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="modal fade show d-block modal-pop"
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-centered modal-pop"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img src={selectedImage} alt="Selected" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
