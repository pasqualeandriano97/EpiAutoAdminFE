export const getAppointments = (token) => {
  return fetch("http://localhost:3001/appointment", {
    method: "GET",
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

export const getTodayAppointments = (token) => {
  return fetch("http://localhost:3001/appointment/today", {
    method: "GET",
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

export const getAppointmentsByDate = (token, date) => {
  return fetch("http://localhost:3001/appointment/date?date=" + date, {
    method: "GET",
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

export const getAppointmentsById = (token, id) => {
  return fetch("http://localhost:3001/appointment/" + id, {
    method: "GET",
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

export const getAppointmentsByUser = (token, email) => {
  return fetch("http://localhost:3001/appointment/user?email=" + email, {
    method: "GET",
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

export const getSummary = (token, plate, email, body) => {
  return fetch(
    "http://localhost:3001/appointment/admin?email=" +
      email +
      "&plate=" +
      plate,
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

export const saveAppointment = (token, userId, payload) => {
  return fetch(
    "http://localhost:3001/appointment/admin/save?userId=" + userId,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
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
