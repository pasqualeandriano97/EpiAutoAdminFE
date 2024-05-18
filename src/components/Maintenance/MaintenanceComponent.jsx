import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import AllMainenances from "./AllMaintenances";
import MaintenancesForPlate from "./MaintenancesForPlate";
import MaintenanceSave from "./MaintenanceSave";
import MaintenancePost from "./MaintenancePost";

const AppointmentComponent = () => {
  const [activeKey, setActiveKey] = useState("all");
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="ms-4 text-white">Pagina delle manutenzioni</h1>
      <Nav
        variant="tabs"
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
        className="mx-5 mt-3 "
      >
        <Nav.Item>
          <Nav.Link
            eventKey="all"
            className="text-white bg-dark border-bottom "
          >
            Tutte le manutenzioni
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="plate"
            className="text-white bg-dark border-bottom"
          >
            Manutenzioni per targa
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="save"
            className="text-white bg-dark border-bottom"
          >
            Programma una manutenzione
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="post"
            className="text-white bg-dark border-bottom"
          >
            Prolunga una manutenzione
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {activeKey === "all" && <AllMainenances />}
      {activeKey === "plate" && <MaintenancesForPlate />}
      {activeKey === "save" && <MaintenanceSave />}
      {activeKey === "post" && <MaintenancePost />}
    </div>
  );
};

export default AppointmentComponent;
