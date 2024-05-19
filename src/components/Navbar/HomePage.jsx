import { useEffect } from "react";
import { refreshVehicle } from "../../Data/Vehicle";

const HomePage = () => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    refreshVehicle(token);
  }, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className="text-center text-white">Buongiorno Caro e buon Lavoro!</h1>
    </div>
  );
};

export default HomePage;
