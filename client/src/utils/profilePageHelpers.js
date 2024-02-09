import { BASE_URL } from "./BASE_URL";

export const getUserPets = async (setPets) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(BASE_URL + "/user/pets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accesstoken: token,
      },
    });
    const data = await response.json();
    console.log("pets: ", data.pets);
    setPets(data.pets);
  } catch (error) {
    console.error("Error during users pets request:", error);
  }
};

export const getReceivedRequest = async (setReceivedRequests) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${BASE_URL}/owner/requests`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accesstoken: token,
      },
    });
    const data = await res.json();
    console.log(data.request);
    if (data.success) {
      setReceivedRequests(data.request);
    }
  } catch (e) {
    console.error("Error in receiving requests: ", e.message);
  }
};

export const getSentRequest = async (setSentRequests) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${BASE_URL}/adopter/requests`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accesstoken: token,
      },
    });
    const data = await res.json();
    console.log(data.request);
    if (data.success) {
      setSentRequests(data.request);
    }
  } catch (e) {
    console.error("Error in sent requests: ", e.message);
  }
};

export const requestUpdateHandler = async (statusValue) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${BASE_URL}/owner/request/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accesstoken: token,
      },
      body: JSON.stringify({
        status: statusValue,
      }),
    });
    const data = await res.json();
    console.log(data.request);
  } catch (e) {
    console.error("Error in sent requests: ", e.message);
  }
};

export const deletePetHandler = async (id, toast) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${BASE_URL}/user/pet/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        accesstoken: token,
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      toast.success("Pet Deleted Successfully.");
      getUserPets();
    }
  } catch (e) {
    console.error("Error in deleting pet: ", e.message);
  }
};
