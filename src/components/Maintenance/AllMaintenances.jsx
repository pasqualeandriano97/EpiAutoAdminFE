import { Container, Row, Col, Button } from "react-bootstrap";
import { getMaintenances } from "../../Data/maintenance";
import { useEffect, useState } from "react";

const AllMainenances = () => {
  const [maintenances, setMaintenances] = useState("");
  const token = window.localStorage.getItem("token");
  const [page, setPage] = useState(0);
  const [firstPage, setFirstPage] = useState(true);
  const [lastPage, setLastPage] = useState(false);
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
    getMaintenances(token).then((data) => {
      setMaintenances(data.content);
      setFirstPage(data.first);
      setLastPage(data.last);
    });
  }, []);
  return (
    <>
      <h3 className="text-center text-white mt-3">
        Lista di tutti gli appuntamenti
      </h3>
      <Container className="mt-3">
        <Row className="flex-column ">
          {maintenances
            ? maintenances.map((maintenance) => (
                <Col
                  key={maintenance.id}
                  className="text-white my-2  bg-secondary p-3 pb-0 border border-black rounded-3"
                >
                  <Row>
                    <Col>
                      <h5>Targa:</h5>
                      <p>{maintenance.vehiclePlate}</p>
                    </Col>
                    <Col>
                      <h5>Codice:</h5>
                      <p>{maintenance.id}</p>
                    </Col>

                    <Col>
                      <h5>Periodo:</h5>
                      <p>Dal: {formatDate(maintenance.startDate)}</p>
                      <p>Al: {formatDate(maintenance.endDate)}</p>
                    </Col>
                  </Row>
                </Col>
              ))
            : ""}
        </Row>
      </Container>
      <div className="d-flex justify-content-center align-items-center  mb-5">
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
        <p className="mx-3 mt-2  text-secondary">{page + 1}</p>
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

export default AllMainenances;
