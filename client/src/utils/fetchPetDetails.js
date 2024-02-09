import { BASE_URL } from "./BASE_URL";

export const fetchPetDetails = async (
  petId,
  setPetDetails,
  toast
) => {
  try {
    const res = await fetch(`${BASE_URL}/user/pet/${petId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const pet = await res.json();
    setPetDetails(pet.pet);
    if (!pet.success) {
      toast.error("Pet not found.");
    }
  } catch (e) {
    console.error("Error while fetching single pet details", e.message);
  }
};
