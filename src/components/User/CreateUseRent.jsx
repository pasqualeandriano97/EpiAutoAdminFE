import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { getPreventive, saveRent } from "../../Data/Rent";

const CreateUserRent = () => {
  const [show1, setShow1] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [date1, setDate1] = useState();
  const [plate, setPlate] = useState("");
  const [email, setEmail] = useState("");
  const [preventive, setPreventive] = useState("");
  const token = window.localStorage.getItem("token");
  const handleShow1 = () => {
    setShow1(true);
  };
  const handleClose = () => setShow1(false);
  const formatter = (string) => {
    const date = new Date(string);
    const formattedDate = date.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formattedDate.replace(/\//g, "-");
  };
  const dataObject = new Date(date1);
  const formattedDate = dataObject.toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  const hour = dataObject.getHours();
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
  const handlePreventive = (e) => {
    e.preventDefault();
    getPreventive(token, plate, email, {
      startDate: formatter(startDate),
      endDate: formatter(endDate),
      date: formattedDate.replace(/\//g, "-"),
      startHour: hour,
    }).then((data) => {
      setPreventive(data);
    });
    setShow1(true);
  };
  const handleSave = (e) => {
    e.preventDefault();
    saveRent(token, preventive.user.id, {
      startDate: formatter(startDate),
      endDate: formatter(endDate),
      date: formattedDate.replace(/\//g, "-"),
      time: hour,
      vehicle: preventive.vehicle.plate,
    }).then((data) => {
      handleClose();
      alert("Noleggio salvato con successo");
      setPreventive("");
    });
  };
  return (
    <Container className="mt-4">
      <Row className="d-flex justify-content-center row-cols-1 ">
        <Col className="col-5">
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Email utente</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Inserisci l'email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-white">Targa veicolo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci la targa"
                  onChange={(e) => setPlate(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Col>
        <Row className="d-flex justify-content-center row-cols-1 mt-3">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <p className="text-white mt-2">Data di inizio del noleggio</p>
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
            <p className="text-white ">Data di fine del noleggio</p>
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
          <Col className="d-flex flex-column justify-content-center align-items-center mt-3 ">
            <p className="text-white ">Data e ora dell&apos;appuntamento</p>
            <DatePicker
              selected={date1}
              className="bg-light rounded-3 "
              dateFormat={"dd/MM/yyyy"}
              timeIntervals={60}
              showTimeSelect
              minTime={new Date(0, 0, 0, 8, 0)}
              maxTime={new Date(0, 0, 0, 18, 0)}
              onChange={(date) => {
                setDate1(date);
                console.log("Selected date:", date);
              }}
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center mt-3 pb-2 pb-lg-0">
            <Button
              variant="primary"
              className="border border-radius"
              onClick={handlePreventive}
            >
              Preventivo
            </Button>
          </Col>
        </Row>
      </Row>
      {preventive ? (
        <Modal show={show1} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Riepilogo prenotazione noleggio</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex">
              <div className="w-100">
                <h5>Veicolo</h5>
                <p>
                  {preventive.vehicle.brand} {preventive.vehicle.model}
                </p>
                <p>
                  {preventive.vehicle.year} -{" "}
                  {translateFuel(preventive.vehicle.fuelType)}
                </p>
                <p>{preventive.vehicle.type.toUpperCase()}</p>
              </div>
            </div>
            <h5>Noleggio</h5>
            <p>Data inizio Noleggio: {formatDate(preventive.startDate)}</p>
            <p>Data fine Noleggio: {formatDate(preventive.endDate)}</p>
            <p>Data dell&apos;appuntamento: {formatDate(preventive.date)}</p>
            <p>Ora dell&apos;appuntamento: {preventive.time}</p>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between align-items-center">
            <h5>Prezzo: {preventive.price} &euro;</h5>
            <div>
              <Button
                variant="secondary"
                onClick={handleClose}
                className="me-2"
              >
                Chiudi
              </Button>
              <Button variant="primary" onClick={(e) => handleSave(e)}>
                Prenota Ora
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
    </Container>
  );
};

export default CreateUserRent;
