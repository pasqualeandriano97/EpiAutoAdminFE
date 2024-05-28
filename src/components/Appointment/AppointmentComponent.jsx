import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import AllAppointments from "./AllAppointments";
import TodayAppointments from "./TodayAppointments";
import AppointmentsForDate from "./AppointmentsForDate";
import AppointmentForId from "./AppointmentForId";
import AppointmentForUser from "./AppointmentForUser";

const AppointmentComponent = () => {
  const [activeKey, setActiveKey] = useState("all");
  return (
    <div style={{ paddingTop: "100px" }}>
      <h1 className="ms-4 text-white">Pagina degli appuntamenti</h1>
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
            Tutti gli appuntamenti
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="today"
            className="text-white bg-dark border-bottom"
          >
            Appuntamenti Oggi
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="date"
            className="text-white bg-dark border-bottom"
          >
            Appuntamenti per data
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="id" className="text-white bg-dark border-bottom">
            Appuntamento per codice
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="email"
            className="text-white bg-dark border-bottom"
          >
            Appuntamenti per utente
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {activeKey === "all" && <AllAppointments />}
      {activeKey === "today" && <TodayAppointments />}
      {activeKey === "date" && <AppointmentsForDate />}
      {activeKey === "id" && <AppointmentForId />}
      {activeKey === "email" && <AppointmentForUser />}
    </div>
  );
};

export default AppointmentComponent;
