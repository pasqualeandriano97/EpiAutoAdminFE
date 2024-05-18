import Nav from "react-bootstrap/Nav";
import AllRents from "./AllRents";
import TodayRents from "./TodayRents";
import RentById from "./RentById";
import RentForPlate from "./RentForPlate";
import { useState } from "react";

const Rent = () => {
  const [activeKey, setActiveKey] = useState("all");

  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="ms-4 text-white">Pagina dei noleggi</h1>
      <Nav
        variant="tabs"
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
        className="mx-5 mt-3"
      >
        <Nav.Item>
          <Nav.Link eventKey="all" className="text-white bg-dark border-bottom">
            Tutti i noleggi
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="today"
            className="text-white bg-dark border-bottom"
          >
            Noleggi Oggi
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
      </Nav>
      {activeKey === "all" && <AllRents />}
      {activeKey === "today" && <TodayRents />}
      {activeKey === "id" && <RentById />}
      {activeKey === "plate" && <RentForPlate />}
    </div>
  );
};

export default Rent;
