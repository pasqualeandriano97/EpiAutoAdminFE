import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { register } from "../../Data/Auth";

const RegisterUser = () => {
  const initialStateR = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  const [formdataR, setFormdataR] = useState(initialStateR);
  const handleRegister = (e) => {
    e.preventDefault();
    register(formdataR);
  };
  return (
    <Container className="mt-4">
      <Row className="align-items-center justify-content-center">
        <Col className="col-4">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="text-white">Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il nome"
              onChange={(e) =>
                setFormdataR({ ...formdataR, name: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSurname">
            <Form.Label className="text-white">Cognome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il cognome"
              onChange={(e) =>
                setFormdataR({ ...formdataR, surname: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col className="col-4">
          {" "}
          <Form.Group className="mb-3" controlId="formBasic1Email">
            <Form.Label className="text-white">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Inserisci l'email"
              onChange={(e) =>
                setFormdataR({ ...formdataR, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic1Password">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Inserisci la password"
              onChange={(e) =>
                setFormdataR({ ...formdataR, password: e.target.value })
              }
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col className="col-1">
          <Button variant="primary" onClick={handleRegister}>
            Salva
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterUser;
