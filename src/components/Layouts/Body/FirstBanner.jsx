import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import "./FirstBanner.css";

// Set a single banner image
const bannerImage = "https://ahaansoftware.com/uploadedimage/Banner/HomeBanner2.png";

// Certification images (served locally)
import Group1 from "../../../assets/images/banner/Group1.jpg";
import Group2 from "../../../assets/images/banner/Group2.jpg";
import Group3 from "../../../assets/images/banner/Group3.jpg";
import Group4 from "../../../assets/images/banner/Group4.jpg";
import Group5 from "../../../assets/images/banner/Group5.jpg";

const FirstBanner = () => {
  return (
    <Container fluid className="p-0">
      <div
        className="banner-container"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          position: "relative",
        }}
      >
        {/* Black Overlay */}
        <div
          className="banner-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
          }}
        ></div>

        <Container>
          <Row className="w-100 banner1" style={{ position: "relative", zIndex: 1 }}>
            <Col md={10}>
              <Badge
                bg="light"
                className="px-3 py-2 mb-3"
                style={{
                  color: "#C7892B",
                  borderRadius: "22px",
                  border: "1px solid #F9F5FF",
                }}
              >
                Technology & Design Studio
              </Badge>
              <h1 className="fw-bold banner1-heading-offshore text-white">
                Reimagine Success, Redefine Possibilities Pioneering Innovative Development
              </h1>
              <p className="mt-3 banner1-content text-white">
                Fuelled by innovation and cutting-edge technology, our
                developers craft web and mobile experiences that captivate
                customers and take your business forward. Let’s transform your
                vision into victory and idea into a game-changing development
                moment!
              </p>
              <a href="/about" className="mt-3 learn-more-banner1-btn">
                Learn More
              </a>
              <div className="mt-4">
                <p className="fw-bold text-white">Certified by</p>
                <div className="d-flex justify-content-start certified-img">
                  <Image src={Group1} alt="Certification 1" width="50" className="rounded-circle" />
                  <Image src={Group2} alt="Certification 2" width="50" className="rounded-circle" />
                  <Image src={Group3} alt="Certification 3" width="50" className="rounded-circle" />
                  <Image src={Group4} alt="Certification 4" width="50" className="rounded-circle" />
                  <Image src={Group5} alt="Certification 5" width="50" className="rounded-circle" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default FirstBanner;
