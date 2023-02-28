import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Doctors = ({ doctors }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 " style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Doctors;
