import { getRentsBydate } from "../../Data/Rent";
import { Container, Row, Col, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useState } from "react";

const RentByDate = () => {
  const token = window.localStorage.getItem("token");
  const [date, setDate] = useState("");
  const [rents, setRents] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    getRentsBydate(token, formatter(date)).then((data) => {
      setRents(data);
    });
  };
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

  return (
    <Container className="mt-3">
      <h3 className="text-center text-white mt-3">
        Lista di tutti i noleggi per data
      </h3>
      <Row>
        <Col className="col-12 text-center text-white mt-3"></Col>
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
          Noleggi per la data {formatter(date)}
        </h3>
      )}

      <Row className="flex-column">
        {rents
          ? rents.map((rent) => (
              <Col
                key={rent.id}
                className="text-white my-2  bg-secondary p-3 pb-0 border border-black rounded-3"
              >
                <Row>
                  <Col>
                    <h5>Targa:</h5>
                    <p>{rent.vehicle.plate}</p>
                  </Col>
                  <Col>
                    <h5>Veicolo:</h5>
                    <p>
                      {rent.vehicle.brand} {rent.vehicle.model}
                    </p>
                    <p>
                      {rent.vehicle.fuelType}-{rent.vehicle.year}
                    </p>
                  </Col>
                  <Col>
                    <h5>Periodo:</h5>
                    <p>Dal: {formatDate(rent.startDate)}</p>
                    <p>Al: {formatDate(rent.endDate)}</p>
                  </Col>
                  <Col>
                    <h5>Utente:</h5>
                    <p>
                      {rent.user.name} {rent.user.surname}
                    </p>
                    <p className="mb-0">{rent.user.email}</p>
                  </Col>
                </Row>
              </Col>
            ))
          : ""}
      </Row>
    </Container>
  );
};

export default RentByDate;
