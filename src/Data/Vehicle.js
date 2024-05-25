export const getVehicleForPlate = (token, plate) => {
  return fetch(
    "https://epiauto-andrianopasquale-b63eda7e.koyeb.app/vehicle/plate?plate=" +
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

export const getByVehicleName = (token, brand, model, page) => {
  return fetch(
    "https://epiauto-andrianopasquale-b63eda7e.koyeb.app/vehicle/name?brand=" +
      brand +
      "&model=" +
      model +
      "&page=" +
      page,
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

export const rentVehicle = (token, plate) => {
  return fetch(
    `https://epiauto-andrianopasquale-b63eda7e.koyeb.app/vehicle/rent?vehicle=${plate}`,
    {
      method: "PATCH",
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

export const sellVehicle = (token, plate) => {
  return fetch(
    "https://epiauto-andrianopasquale-b63eda7e.koyeb.app/vehicle/sell?vehicle=" +
      plate,
    {
      method: "PATCH",
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

export const returnVehicle = (token, plate) => {
  return fetch(
    "https://epiauto-andrianopasquale-b63eda7e.koyeb.app/vehicle/return?vehicle=" +
      plate,
    {
      method: "PATCH",
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

export const saveVehicle = (token, body) => {
  return fetch("https://epiauto-andrianopasquale-b63eda7e.koyeb.app/vehicle", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
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

export const addVehicleImage = (token, plate, image) => {
  return fetch(
    "https://epiauto-andrianopasquale-b63eda7e.koyeb.app/vehicle/plate?plate=" +
      plate,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(image),
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

export const updateVehicle = (token, body) => {
  return fetch(
    "https://epiauto-andrianopasquale-b63eda7e.koyeb.app/vehicle/plate?plate=" +
      body.plate,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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

export const refreshVehicle = (token) => {
  return fetch("https://epiauto-andrianopasquale-b63eda7e.koyeb.app/vehicle", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })
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
