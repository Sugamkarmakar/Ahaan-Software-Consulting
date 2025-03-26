import React, { useState } from "react";
import testi1 from '../../../assets/testi1.png';
import testi3 from '../../../assets/testi3.png';
import testi4 from '../../../assets/testi4.png';
import testi6 from '../../../assets/testi6.png';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import './Testimonials.css'
const TestimonialCarousel = () => {
    const testimonials = [
        {
          id: 1,
          quote: "I had a very wonderful exprince with ahaan software they created our clothing brand website heliclothing( mens lcasual wear) Really apriciated their work",
          name: "Sam Jais",
          image: testi1, 
        },
        {
          id: 2,
          quote: "Good designing & development company. Recently, they have designed my website and currently doing marketing for Solar Installation services. Work quality is excellent and they met my expectations. Thanks to your entire team. 👍",
          name: "Samuel Watson",
          image: testi3, 
        },
        
        
        {
          id: 5,
          quote: "Disciplined job and are ethically trustworthy. The team of this company are always available for inquiries and questions, and they provide support, key insight, ideas and direction when possible. I think they have a good team, well organized and efficient with their time. Nice experience with this company that designed my business website.",
          name: "Rosanna Feyerabend",
          image: testi4, 
        },
        {
          id: 6,
          quote: "We partnered with this company for both social media branding and website development, and the results have been fantastic. Our business conversions increased by 50% thanks to their effective strategies and high-quality work. The team is knowledgeable, creative, and results-driven. Highly recommended for any business looking to grow!",
          name: "Aman Jaiswal",
          image: testi6, 
        },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-section py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ fontWeight: "bold",color:"#C5872B" }}>What Our Clients Say</h2>
        <div className="carousel">
          <div className="testimonial-card">
            <div className="d-flex justify-content-center mb-3" style={{ position: "relative", top: "-40px" }}>
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="rounded-circle"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  border: "4px solid #ffffff",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
              />
            </div>
            <h5 className="mb-1" style={{ fontWeight: "bold" }}>{testimonials[currentIndex].name}</h5>
            <p className="text-muted">{testimonials[currentIndex].designation}</p>
            <div className="testi-text"><p className="text-secondary fst-italic ">"{testimonials[currentIndex].quote}"</p></div>
            
          </div>
          <div className="carousel-navigation">
            <button onClick={prevTestimonial} className="prev-button"><FaAngleLeft /></button>
            <button onClick={nextTestimonial} className="next-button"><FaAngleRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
