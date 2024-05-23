import { Nav } from "react-bootstrap";
import { useState } from "react";
import RegisterUser from "./RegisterUser";
import CreateUserRent from "./CreateUseRent";

const UserComponent = () => {
  const [activeKey, setActiveKey] = useState("all");

  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="ms-4 text-white">Pagina degli utenti</h1>
      <Nav
        variant="tabs"
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
        className="mx-5 mt-3"
      >
        <Nav.Item>
          <Nav.Link eventKey="all" className="text-white bg-dark border-bottom">
            Crea un utente
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="today"
            className="text-white bg-dark border-bottom"
          >
            Prenota Noleggio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="id" className="text-white bg-dark border-bottom">
            Noleggio per codice
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="plate"
            className="text-white bg-dark border-bottom"
          >
            Noleggi per targa
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="date"
            className="text-white bg-dark border-bottom"
          >
            Noleggi per data
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {activeKey === "all" && <RegisterUser />}
      {activeKey === "today" && <CreateUserRent />}
      {/* {activeKey === "id" && <RentById />}
        {activeKey === "plate" && <RentForPlate />}
        {activeKey === "date" && <RentByDate />} */}
    </div>
  );
};

export default UserComponent;
