import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { getByVehicleName } from "../../Data/Vehicle";

const SearchVehicle = () => {
  const token = window.localStorage.getItem("token");
  const [vehicles, setVehicles] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [page, setPage] = useState(0);
  const [firstPage, setFirstPage] = useState(true);
  const [lastPage, setLastPage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    getByVehicleName(token, brand, model, page).then((data) => {
      setVehicles(data.content);
      setPage(data.number);
      setFirstPage(data.first);
      setLastPage(data.last);
    });
  };
  const handleClickUp = () => {
    getByVehicleName(token, brand, model, page + 1).then((data) => {
      setVehicles(data.content);
      setPage(data.number);
      setFirstPage(data.first);
      setLastPage(data.last);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClickDown = () => {
    getByVehicleName(token, brand, model, page - 1).then((data) => {
      setVehicles(data.content);
      setPage(data.number);
      setFirstPage(data.first);
      setLastPage(data.last);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <h3 className="text-center text-white mt-3">
        Cerca veicoli per Marca e Modello
      </h3>
      <Container className="mt-3">
        <Row className="align-items-center justify-content-center">
          <Col className="col-6">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Row className="align-items justify-content-center mt-2">
                  <Col className="col-4">
                    <Form.Label className="text-white text-center ">
                      Inserisci la marca del veicolo
                    </Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </Col>
                  <Col className="col-4">
                    <Form.Label className="text-white text-center ">
                      Inserisci il modello del veicolo
                    </Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setModel(e.target.value)}
                    />
                  </Col>
                  <Col className="col-2 d-flex flex-column-reverse ">
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
          {brand && (
            <h3 className="text-center text-white mt-3">
              Informazioni del veicolo con marca: {brand}
            </h3>
          )}
          <Row className="flex-column">
            {vehicles &&
              vehicles.map((vehicle) => (
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
              ))}
          </Row>
        </Container>
        {vehicles && (
          <div className="d-block">
            <Col className="d-flex justify-content-center align-items-center  mb-5">
              {firstPage ? (
                ""
              ) : (
                <Button
                  variant="secondary"
                  className="border border-radius"
                  onClick={handleClickDown}
                >
                  <i className="bi bi-arrow-left-circle"></i>
                </Button>
              )}
              <p className="mx-3 mt-2  text-secondary">{page + 1}</p>
              {lastPage ? (
                ""
              ) : (
                <Button
                  variant="secondary"
                  className="border border-radius"
                  onClick={handleClickUp}
                >
                  <i className="bi bi-arrow-right-circle"></i>
                </Button>
              )}
            </Col>
          </div>
        )}
      </Container>
    </>
  );
};

export default SearchVehicle;
