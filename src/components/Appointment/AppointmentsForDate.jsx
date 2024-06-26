import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { getAppointmentsByDate } from "../../Data/appointment";

const AppointmentsForDate = () => {
  const token = window.localStorage.getItem("token");
  const [appointments, setAppointments] = useState("");
  const [date, setDate] = useState();
  const formatter = (string) => {
    const date = new Date(string);
    const formattedDate = date.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formattedDate.replace(/\//g, "-");
  };
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getAppointmentsByDate(token, formatter(date)).then((data) => {
      setAppointments(data);
    });
  };
  return (
    <Container className="mt-3">
      <Row>
        <Col className="d-flex justify-content-center align-items-center ">
          <DatePicker
            className="bg-light rounded-3 me-2 "
            selected={date}
            dateFormat={"dd/MM/yyyy"}
            onChange={(date) => setDate(date)}
          />
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Cerca
          </Button>
        </Col>
      </Row>
      {date && (
        <h3 className="text-center text-white mt-3">
          Appuntamenti per la data {formatter(date)}
        </h3>
      )}

      <Row className="flex-column">
        {appointments
          ? appointments.map((appointment) => (
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
            ))
          : ""}
      </Row>
    </Container>
  );
};

export default AppointmentsForDate;
