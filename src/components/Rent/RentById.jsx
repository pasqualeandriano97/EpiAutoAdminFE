import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { getRentsforId } from "../../Data/Rent";
import { useState } from "react";

const RentById = () => {
  const token = window.localStorage.getItem("token");
  const [rent, setRent] = useState("");
  const [id, setId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getRentsforId(token, id).then((data) => {
      setRent(data);
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
                  Inserisci il codice del noleggio
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
        {rent ? (
          <Container>
            <h3 className="text-center text-white mt-3">
              Noleggio con id: {rent.id}
            </h3>
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
          </Container>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default RentById;
