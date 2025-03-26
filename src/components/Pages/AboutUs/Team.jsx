import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.css";
import { FaLinkedinIn } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Vishal Jaiswal",
    position: "CEO & Founder",
    image: "https://ahaansoftware.com/uploadedimage/Team/Vishal.png",
  },
  {
    name: "Soumya Bhattacharya",
    position: "Project Manager",
    image: "https://ahaansoftware.com/uploadedimage/Team/Soumya.png",
  },
  {
    name: "Debadipta Naskar",
    position: "Human Resource",
    image: "https://ahaansoftware.com/uploadedimage/Team/Debadipta.png",
  },
  {
    name: "Aditi Dwivedi",
    position: "Business Development Associate",
    image: "https://ahaansoftware.com/uploadedimage/Team/Aditi.png",
  },
  {
    name: "Soumi Kanungo",
    position: "Web Developer",
    image: "/https://ahaansoftware.com/uploadedimage/Team/Soumi.png",
  },
  {
    name: "Rimpa Dutta",
    position: "UI/UX Designer",
    image: "https://ahaansoftware.com/uploadedimage/Team/Rimpa.png",
  },
  {
    name: "Ujjawal Shaw",
    position: "Business Developer",
    image: "https://ahaansoftware.com/uploadedimage/Team/Ujjwal.png",
  },
  {
    name: "Surajit Bera",
    position: "UI/UX Designer",
    image: "https://ahaansoftware.com/uploadedimage/Team/Surajit.png",
  },
  {
    name: "Subhadeep Dey",
    position: "Web Developer",
    image: "https://ahaansoftware.com/uploadedimage/Team/Subhadeep.png",
  },
  {
    name: "Soumitra Maity",
    position: "Sr. Web Developer",
    image: "https://ahaansoftware.com/uploadedimage/Team/Soumitra.png",
  },
  {
    name: "Sugam Karmakar",
    position: "Frontend Developer",
    image: "https://ahaansoftware.com/uploadedimage/Team/Sugam.png",
  },
];

const MeetOurTeam = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center title">Meet Our Team</h2>
      <p className="text-center text-muted mb-4 description">
        Our talented team is here to bring your vision to life!
      </p>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="team-card position-relative overflow-hidden">
              <div
                className="team-bg position-absolute top-0 start-0 w-100"
                style={{
                  height: "150px",
                }}
              >
                <img
                  src="https://ahaansoftware.com/uploadedimage/ascbackground.png"
                  alt="Background"
                  className="img-fluid w-100 team-background-img"
                  style={{
                    height: "100%", 
                    objectFit: "cover",
                    borderRadius: "0",
                  }}
                />
              </div>

              <div className="team-img position-relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle border border-white"
                />
              </div>

              <div className="card-body pt-3 d-flex justify-content-between align-items-center">
                <div>
                  <div style={{ position: "relative", left: "30px" }}>
                    <h5 className="card-title fw-bold">{member.name}</h5>
                    <p className="card-text text-muted">{member.position}</p>
                  </div>
                </div>
                <div
                  className="team-social-icons"
                  style={{
                    position: "relative",
                    right: "30px",
                    backgroundColor: "black", 
                    borderRadius: "50%", 
                    padding: "4px",
                    display: "inline-block",
                  }}
                >
                  <FaLinkedinIn
                    style={{
                      color: "#C7892B",
                      fontSize: "23px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurTeam;
