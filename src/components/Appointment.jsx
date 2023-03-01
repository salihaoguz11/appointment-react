import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
const Appointment = ({ setAppointments, appointments }) => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2"> Appointment List</h3>
      {appointments.length && (
        <img src="./img/appointment.jpg" width="50%" alt="" />
      )}
      {appointments.map((item) => {
        const { id, patient, consulted, doctor, day } = item;
        return (
          <div>
            <Row>
              <Col>
                <h4>{patient}</h4>
                <h5>{doctor}</h5>
                <h6>{day.toDateString()}</h6>
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default Appointment;
