import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { getMaintenancesByPlate } from "../../Data/maintenance";
import { useState } from "react";

const MaintenancesForPlate = () => {
  const token = window.localStorage.getItem("token");
  const [maintenances, setMaintenances] = useState("");
  const [plate, setPlate] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getMaintenancesByPlate(token, plate).then((data) => {
      setMaintenances(data);
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
              Lista delle manutenzioni del veicolo con targa: {plate}
            </h3>
          )}
          <Row className="flex-column">
            {maintenances &&
              maintenances.map((maintenance) => (
                <Col
                  key={maintenance.id}
                  className="text-white my-2  bg-secondary p-3 pb-0 border border-black rounded-3"
                >
                  <Row>
                    <Col>
                      <h5>Targa:</h5>
                      <p>{maintenance.vehiclePlate}</p>
                    </Col>
                    <Col>
                      <h5>Codice:</h5>
                      <p>{maintenance.id}</p>
                    </Col>

                    <Col>
                      <h5>Periodo:</h5>
                      <p>Dal: {formatDate(maintenance.startDate)}</p>
                      <p>Al: {formatDate(maintenance.endDate)}</p>
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

export default MaintenancesForPlate;
