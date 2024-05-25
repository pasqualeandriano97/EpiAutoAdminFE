export const getMaintenances = (token) => {
  return fetch(
    "https://epiauto-andrianopasquale-b63eda7e.koyeb.app/maintenance",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((data) => {
          throw new Error(data.message);
        });
      }
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const getMaintenanceById = (token, id) => {
  return fetch(
    "https://epiauto-andrianopasquale-b63eda7e.koyeb.app/maintenance/" + id,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((data) => {
          throw new Error(data.message);
        });
      }
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const getMaintenancesByPlate = (token, plate) => {
  return fetch(
    "https://epiauto-andrianopasquale-b63eda7e.koyeb.app/maintenance/vehicle?plate=" +
      plate,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((data) => {
          throw new Error(data.message);
        });
      }
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const saveMaintenance = (token, body) => {
  return fetch(
    "https://epiauto-andrianopasquale-b63eda7e.koyeb.app/maintenance",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )
    .then((response) => {
      if (response.ok) {
        alert("Salvato con successo");
        return response.json();
      } else {
        return response.json().then((data) => {
          throw new Error(data.message);
        });
      }
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const postMaintenance = (token, body) => {
  return fetch(
    "https://epiauto-andrianopasquale-b63eda7e.koyeb.app/maintenance",
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  )
    .then((response) => {
      if (response.ok) {
        alert("Salvato con successo");
        return response.json();
      } else {
        return response.json().then((data) => {
          throw new Error(data.message);
        });
      }
    })
    .catch((error) => {
      alert(error.message);
    });
};
