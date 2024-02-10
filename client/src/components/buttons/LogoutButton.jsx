import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton() {
  const {logout} = useAuth0();
  return (
    <button onClick={() => logout()} className="bg-green-500 hover:bg-green-700 p-2 text-white rounded-lg font-bold">
      Log Out
    </button>
  )
}