import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import VehicleState from "./VehicleState";
import RentVehicle from "./RentVehicle";
import SellVehicle from "./SellVehicle";
import ReturnVehicle from "./ReturnVehicle";
import AddVehicle from "./AddVehicle";
import AddVehicleImage from "./AddVehicleImage";
import UpdateVehicle from "./UpdateVehicle";
import SearchVehicle from "./SearchVehicle";

const VehicleComponent = () => {
  const [activeKey, setActiveKey] = useState("all");

  return (
    <div style={{ paddingTop: "100px" }}>
      <h1 className="ms-4 text-white">Pagina del parco auto</h1>
      <Nav
        variant="tabs"
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
        className="mx-5 mt-3"
      >
        <Nav.Item>
          <Nav.Link
            eventKey="state"
            className="text-white bg-dark border-bottom"
          >
            Controlla stato veicolo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="rent"
            className="text-white bg-dark border-bottom"
          >
            Noleggia veicolo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="sell"
            className="text-white bg-dark border-bottom"
          >
            Vendi veicolo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="return"
            className="text-white bg-dark border-bottom"
          >
            Ritira veicolo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="add" className="text-white bg-dark border-bottom">
            Aggiungi veicolo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="image"
            className="text-white bg-dark border-bottom"
          >
            Aggiungi Immagine a Veicolo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="modify"
            className="text-white bg-dark border-bottom"
          >
            Modifica info veicolo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="search"
            className="text-white bg-dark border-bottom"
          >
            Cerca veicoli
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {activeKey === "state" && <VehicleState />}
      {activeKey === "rent" && <RentVehicle />}
      {activeKey === "sell" && <SellVehicle />}
      {activeKey === "return" && <ReturnVehicle />}
      {activeKey === "add" && <AddVehicle />}
      {activeKey === "image" && <AddVehicleImage />}
      {activeKey === "modify" && <UpdateVehicle />}
      {activeKey === "search" && <SearchVehicle />}
    </div>
  );
};

export default VehicleComponent;
