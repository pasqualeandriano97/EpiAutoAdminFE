import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { getAppointmentsById } from "../../Data/appointment";

const AppointmentForId = () => {
  const token = window.localStorage.getItem("token");
  const [appointment, setAppointment] = useState("");
  const [id, setId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getAppointmentsById(token, id).then((data) => {
      setAppointment(data);
    });
  };
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  return (
    <>
      <Container className="mt-3">
        <Row className="align-items-center justify-content-center">
          <Col className="col-6">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-white text-center ">
                  Inserisci il codice dell&apos;appuntamento
                </Form.Label>
                <Row className="align-items justify-content-center ">
                  <Col className="col-8">
                    <Form.Control
                      type="number"
                      onChange={(e) => setId(e.target.value)}
                    />
                  </Col>
                  <Col className="col-4">
                    <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                      Cerca
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        {appointment ? (
          <Container className="mt-3">
            <Row className="flex-column ">
              <Col
                key={appointment.id}
                className="text-white my-2  bg-secondary p-3 pb-0 border border-black rounded-3"
              >
                <Row>
                  <Col>
                    <Row className="flex-column">
                      <Col>
                        <h5>Targa:</h5>
                        <p>{appointment.vehiclePlate}</p>
                      </Col>
                      <Col>
                        <h5>Codice:</h5>
                        <p>{appointment.id}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <h5>Data:</h5>
                    <p>Il: {formatDate(appointment.date)}</p>
                  </Col>
                  <Col>
                    <h5>Ora:</h5>
                    <p>Alle: {appointment.hour}</p>
                  </Col>
                  <Col>
                    <h5>Utente:</h5>
                    <p>
                      {appointment.name} {appointment.surname}
                    </p>
                    <p className="mb-0">{appointment.email}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default AppointmentForId;
