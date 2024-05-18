import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { postMaintenance, getMaintenanceById } from "../../Data/maintenance";

const MaintenancePost = () => {
  const token = window.localStorage.getItem("token");
  const [newDate, setNewDate] = useState();
  const [id, setId] = useState();
  const [formData, setFormData] = useState("");
  const [newMaintenance, setNewMaintenance] = useState("");
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
      maintenanceId: id,
      endDate: formatDate(newDate),
    });
    getMaintenanceById(token, id).then((data) => {
      setNewMaintenance(data);
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    console.log(formData);
    postMaintenance(token, formData);
  };
  return (
    <Container className="mt-3">
      <Row className="align-items-center justify-content-center">
        <Col className="col-8">
          <Row className="align-items-center justify-content-center">
            <Col className="d-flex flex-column justify-content-center align-items-center">
              <h5 className="text-white mt-2">Codice della manutenzione</h5>
              <Form>
                <Form.Group>
                  <Form.Control
                    type="number"
                    onChange={(e) => setId(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center mt-3 ">
              <h5 className="text-white ">Data di fine del manutenzione</h5>
              <DatePicker
                className="bg-light rounded-3 "
                selectsEnd
                selected={newDate}
                dateFormat={"dd/MM/yyyy"}
                onChange={(date) => setNewDate(date)}
              />
            </Col>
            <Row className="d-flex justify-content-center mt-4">
              <Col className="col-4">
                <Button variant="secondary" onClick={(e) => handleSummary(e)}>
                  Riepilogo
                </Button>
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
                <p>{newMaintenance.vehiclePlate}</p>
              </Col>
              <Col className="d-flex flex-column justify-content-center align-items-center">
                <h5>Periodo:</h5>
                <p>Dal: {formatDate(newMaintenance.startDate)}</p>
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

export default MaintenancePost;
