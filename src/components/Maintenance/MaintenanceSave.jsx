import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { saveMaintenance } from "../../Data/maintenance";

const MaintenanceSave = () => {
  const token = window.localStorage.getItem("token");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [plate, setPlate] = useState();
  const [formData, setFormData] = useState("");
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  const handleSummary = (e) => {
    e.preventDefault();
    setFormData({
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      vehiclePlate: plate,
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    console.log(formData);
    saveMaintenance(token, formData);
  };

  return (
    <Container className="mt-3">
      <Row className="align-items-center justify-content-center">
        <Col className="col-8">
          <Row className="align-items-center justify-content-center">
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-white mt-2">
                Data di inizio del manutenzione
              </h5>
              <DatePicker
                className="bg-light rounded-3 "
                selectsStart
                selected={startDate}
                dateFormat={"dd/MM/yyyy"}
                onChange={(date) => setStartDate(date)}
                startDate={startDate}
              />
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center mt-3 ">
              <h5 className="text-white ">Data di fine del manutenzione</h5>
              <DatePicker
                className="bg-light rounded-3 "
                selectsEnd
                selected={endDate}
                dateFormat={"dd/MM/yyyy"}
                onChange={(date) => setEndDate(date)}
                endDate={endDate}
                startDate={startDate}
                minDate={startDate}
              />
            </Col>
            <Row className="d-flex justify-content-center mt-4">
              <Col className="col-4">
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
                        <Button
                          variant="secondary"
                          onClick={(e) => handleSummary(e)}
                        >
                          Riepilogo
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      {formData && (
        <Row className="justify-content-center">
          <Col className="col-8 text-white my-2  bg-secondary p-3 pb-0 border border-black rounded-3 ">
            <h3 className="text-center mb-4">Riepilogo manutenzione</h3>
            <Row>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <h5>Targa:</h5>
                <p>{formData.vehiclePlate}</p>
              </Col>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <h5>Periodo:</h5>
                <p>Dal: {formData.startDate}</p>
                <p>Al: {formData.endDate}</p>
              </Col>
            </Row>
            <Col className="d-flex align-items-center justify-content-center pb-3">
              <Button variant="primary" onClick={(e) => handleSave(e)}>
                Salva
              </Button>
            </Col>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MaintenanceSave;
