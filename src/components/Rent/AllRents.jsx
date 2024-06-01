import { Container, Row, Col, Button } from "react-bootstrap";
import { getRents } from "../../Data/Rent";
import { useEffect, useState } from "react";

const AllRents = () => {
  const [rents, setRents] = useState([]);
  const [page, setPage] = useState(0);
  const [firstPage, setFirstPage] = useState(true);
  const [lastPage, setLastPage] = useState(false);
  const token = window.localStorage.getItem("token");
  const handleClickDown = () => {
    setPage(page - 1);
  };
  const handleClickUp = () => {
    setPage(page + 1);
  };
  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  useEffect(() => {
    getRents(token, page).then((data) => {
      setRents(data.content);
      setFirstPage(data.first);
      setLastPage(data.last);
    });
  }, [page]);
  return (
    <>
      <h3 className="text-center text-white mt-3">Lista di tutti i noleggi</h3>
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
                      <h5>Codice:</h5>
                      <p>{rent.id}</p>
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
      <div className="d-flex justify-content-center align-items-center  pb-5">
        {firstPage ? (
          ""
        ) : (
          <Button
            variant="secondary"
            className="border border-radius"
            onClick={handleClickDown}
          >
            <i className="bi bi-arrow-left-circle"></i>
          </Button>
        )}
        <p className="mx-3 mt-2  text-light">{page + 1}</p>
        {lastPage ? (
          ""
        ) : (
          <Button
            variant="secondary"
            className="border border-radius"
            onClick={handleClickUp}
          >
            <i className="bi bi-arrow-right-circle"></i>
          </Button>
        )}
      </div>
    </>
  );
};

export default AllRents;
