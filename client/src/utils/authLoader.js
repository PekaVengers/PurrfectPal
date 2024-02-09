import { redirect } from "react-router-dom";
import checkAuth from "./checkAuth";

export default async function authLoader() {
  if (!checkAuth()) {
    return redirect("/login");
  }
  return null;
}