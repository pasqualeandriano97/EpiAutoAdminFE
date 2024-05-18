import { Container, Row, Col } from "react-bootstrap";
import { getTodayAppointments } from "../../Data/appointment";
import { useEffect, useState } from "react";

const TodayAppointments = () => {
  const [appointments, setAppointments] = useState("");
  const [today, setToday] = useState("");
  const token = window.localStorage.getItem("token");

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  useEffect(() => {
    setToday(new Date());
    getTodayAppointments(token).then((data) => {
      setAppointments(data);
    });
  }, []);
  return (
    <>
      {today && (
        <h3 className="text-center text-white mt-3">
          Lista di tutti gli appuntamenti per il {today.getDate()}/
          {today.getMonth() + 1}/{today.getFullYear()}
        </h3>
      )}

      <Container className="mt-3">
        <Row className="flex-column ">
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
    </>
  );
};

export default TodayAppointments;
