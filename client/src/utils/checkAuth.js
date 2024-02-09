import { redirect } from "react-router-dom";

export default function checkAuth() {
  const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn")) || false;
  if (!isLoggedIn) {
    return false;
  }
  return true;
}