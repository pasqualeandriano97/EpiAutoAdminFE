import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { getRentsforPlate } from "../../Data/Rent";
import { useState } from "react";

const RentForPlate = () => {
  const token = window.localStorage.getItem("token");
  const [rents, setRents] = useState("");
  const [plate, setPlate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getRentsforPlate(token, plate).then((data) => {
      setRents(data);
    });
  };
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  const translateFuel = (fuel) => {
    switch (fuel) {
      case "GASOLINE":
        return "BENZINA";
      case "DIESEL":
        return "DIESEL";
      case "ELECTRIC":
        return "ELETTRICA";

      default:
        return "Errore";
    }
  };

  return (
    <>
      <h3 className="text-center text-white mt-3">
        Lista di tutti i noleggi del veicolo per targa
      </h3>
      <Container className="mt-3">
        <Row className="align-items-center justify-content-center">
          <Col className="col-6">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-white text-center ">
                  Inserisci la terga del veicolo
                </Form.Label>
                <Row className="align-items justify-content-center ">
                  <Col className="col-8">
                    <Form.Control
                      type="text"
                      onChange={(e) => setPlate(e.target.value)}
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

        <Container>
          {plate && (
            <h3 className="text-center text-white mt-3">
              Lista dei noleggi del veicolo con targa: {plate}
            </h3>
          )}
          <Row className="flex-column">
            {rents &&
              rents.map((rent) => (
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
                        {translateFuel(rent.vehicle.fuelType)}-
                        {rent.vehicle.year}
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
              ))}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default RentForPlate;
