import Login from "./login";
import Logout from "./logout";
import Register from "./regestration";

export default function UserBar({ user, dispatch }) {
  if (user) {
    return <logout user={user} dispatch={dispatch} />;
  } else {
    return (
      <>
        <login dispatch={dispatch} />
        <register dispatch={dispatch} />
      </>
    );
  }
}