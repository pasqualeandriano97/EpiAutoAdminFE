import { Container, Row, Col } from "react-bootstrap";
import { getTodayRents } from "../../Data/Rent";
import { useEffect, useState } from "react";

const TodayRents = () => {
  const [rents, setRents] = useState([]);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    getTodayRents(token).then((data) => {
      setRents(data);
    });
  }, []);
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  return (
    <>
      <h3 className="text-center text-white mt-3">
        Lista di tutti i noleggi in corso
      </h3>
      <Container className="mt-3">
        <Row className="flex-column ">
          {rents
            ? rents.map((rent) => (
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
              ))
            : ""}
        </Row>
      </Container>
    </>
  );
};

export default TodayRents;
