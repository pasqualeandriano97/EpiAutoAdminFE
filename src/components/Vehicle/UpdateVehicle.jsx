import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { updateVehicle } from "../../Data/Vehicle";

const UpdateVehicle = () => {
  const token = window.localStorage.getItem("token");
  const [vehicle, setVehicle] = useState("");
  const formData = {
    plate: "",
    fuelType: "",
    brand: "",
    model: "",
    type: "",
    year: "",
    imageUrl: "",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateVehicle(token, formData).then((data) => {
      setVehicle(data);
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
  const reTranslateFuel = (fuel) => {
    switch (fuel.toUpperCase()) {
      case "BENZINA":
        return "GASOLINE";
      case "DIESEL":
        return "DIESEL";
      case "ELETTRICA":
        return "ELECTRIC";

      default:
        return "Errore";
    }
  };
  return (
    <>
      <h3 className="text-center text-white mt-3">Modifica un veicolo</h3>
      <Container className="mt-3">
        <Row className="align-items-center justify-content-center">
          <Col className="col-6">
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="plate">
                    <Form.Label className="text-white">Targa</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci la targa"
                      onChange={(e) =>
                        (formData.plate = e.target.value.toUpperCase())
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="brand">
                    <Form.Label className="text-white">Marca</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci la marca"
                      onChange={(e) => (formData.brand = e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="fuelType">
                    <Form.Label className="text-white">
                      Motorizzazione
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci la motorizzzazione"
                      onChange={(e) =>
                        (formData.fuelType = reTranslateFuel(e.target.value))
                      }
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="year">
                    <Form.Label className="text-white">Anno</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Inserisci l'anno"
                      onChange={(e) => (formData.year = e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="model">
                    <Form.Label className="text-white">Modello</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il modello"
                      onChange={(e) => (formData.model = e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="type">
                    <Form.Label className="text-white">Tipo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tipo"
                      onChange={(e) => (formData.type = e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="image">
                <Form.Label className="text-white">Immagine</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci l'immagine"
                  onChange={(e) => (formData.imageUrl = e.target.value)}
                />
              </Form.Group>
              <div className="d-flex flex-row-reverse ">
                <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                  Aggiungi
                </Button>
              </div>
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
    </>
  );
};

export default UpdateVehicle;
