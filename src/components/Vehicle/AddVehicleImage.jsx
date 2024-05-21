import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { addVehicleImage } from "../../Data/Vehicle";

const AddVehicleImage = () => {
  const token = window.localStorage.getItem("token");
  const [plate, setPlate] = useState("");
  const [imageUrl, setImageUrl] = useState({ imageUrl: "" });
  const [vehicle, setVehicle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addVehicleImage(token, plate, imageUrl).then((data) => {
      setVehicle(data);
      console.log(vehicle);
    });
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
    <Container className="mt-3">
      <Row className="align-items-center justify-content-center">
        <Col className="col-6">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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

                <Col className="col-4"></Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white text-center ">
                Inserisci l&apos;immagine del veicolo
              </Form.Label>
              <Row className="align-items justify-content-center ">
                <Col className="col-8">
                  <Form.Control
                    type="text"
                    onChange={(e) => setImageUrl({ imageUrl: e.target.value })}
                  />
                </Col>

                <Col className="col-4">
                  <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                    Salva
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
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
            </Row>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default AddVehicleImage;
