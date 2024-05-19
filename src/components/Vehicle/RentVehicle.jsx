import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { rentVehicle } from "../../Data/Vehicle";

const RentVehicle = () => {
  const token = window.localStorage.getItem("token");
  const [vehicle, setVehicle] = useState("");
  const [plate, setPlate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    rentVehicle(token, plate).then((data) => {
      setVehicle(data);
    });
  };
  const translateState = (state) => {
    switch (state) {
      case "AVAILABLE":
        return "DISPONIBILE";
      case "RENTED":
        return "NOLEGGIATO";
      case "SOLD":
        return "VENDUTO";
      case "MAINTENANCE":
        return "MANUTENZIONE";
      default:
        return "Errore";
    }
  };
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
      <h3 className="text-center text-white mt-3">Noleggia un veicolo</h3>
      <Container className="mt-3">
        <Row className="align-items-center justify-content-center">
          <Col className="col-6">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-white text-center ">
                  Inserisci la targa del veicolo
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
              Informazioni del veicolo con targa: {plate}
            </h3>
          )}
          <Row className="flex-column">
            {vehicle && (
              <Col
                key={vehicle.plate}
                className="text-white my-2  bg-secondary p-3 pb-0 border border-black rounded-3"
              >
                <Row>
                  <Col>
                    <h5>Targa:</h5>
                    <p>{vehicle.plate}</p>
                  </Col>
                  <Col>
                    <h5>Marca e modello:</h5>
                    <p>
                      {vehicle.brand} {vehicle.model}
                    </p>
                  </Col>

                  <Col>
                    <h5>Anno e motorizzazione:</h5>
                    <p>
                      {vehicle.year} - {translateFuel(vehicle.fuelType)}
                    </p>
                  </Col>
                  <Col>
                    <h5>Stato:</h5>
                    <p>{translateState(vehicle.state)}</p>
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default RentVehicle;
