import { useEffect } from "react";
import { refreshVehicle } from "../../Data/Vehicle";

const HomePage = () => {
  const token = localStorage.getItem("token");
  const days = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const today = new Date();
  const day = today.getDay();
  const date = days[day];
  const fullDate = today.toLocaleDateString();
  useEffect(() => {
    refreshVehicle(token);
  }, []);
  return (
    <div
      style={{ paddingTop: "80px" }}
      className="d-flex flex-column align-items-center"
    >
      <h1 className="text-center text-white rounded-3 d-inline bg-dark p-2 mt-4">
        Buongiorno e buon {date}!
      </h1>
      <h1 className="text-center text-white rounded-3 d-inline bg-dark p-2">
        Oggi è il {fullDate}
      </h1>
    </div>
  );
};

export default HomePage;
