import { BASE_URL } from "./BASE_URL";

export const adoptPet = async (msg, petId, toast) => {
  const token = localStorage.getItem("token");
  try {
    const res = await fetch(`${BASE_URL}/adopt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accesstoken: token,
      },
      body: JSON.stringify({
        petId: petId,
        message: msg,
      }),
    });
    const data = await res.json();
    data.success && toast.success("Adoption Request Sent Successfully!");
  } catch (e) {
    console.error("Error while fetching single pet details", e.message);
  }
};
