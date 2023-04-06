import React from "react";
import { Carousel, Row, Col } from "antd";

const contentStyle = {
  margin: 10,
  height: "80px",
};

const MySlider = () => {
  return (
    <Row style={{ width: "380px", maxWidth: "100%", justifyContent:"center", alignItems:"center" }}>
      <Col lg={24}>
        <Carousel autoplay={5000} className="w-full">
          <div>
            <h3 style={contentStyle}>
              We provide the best learning courses and great mentors!
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              You will enjoy on friendly and co-operative environment.
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              But the assignments must be done at a scheduled time.
            </h3>
          </div>
        </Carousel>
      </Col>
    </Row>
  );
};

export default MySlider;
