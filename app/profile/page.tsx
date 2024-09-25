import { changePremium, changeUsername, getSession } from "@/actions/actions";
import { redirect } from "next/navigation";

const Profile = async () =>{
  
  const session = await getSession();

  if(!session.isLoggedIn) redirect ('/');

  return (
    <div className="profile">
        <h1 className="font-bold">Welcome to Profile page</h1>
        <p>
          Welcome, <b>{session.username}</b>
        </p>
        <span>You are a <b>{session.isPro ? "Premium" : "Free"}</b> user</span>
        <form action={changePremium}>
          <button>{session.isPro ? "Cancel" : "Buy"} Premium</button>
        </form>
        <form action={changeUsername}>
          <input
            type="text"
            name="username"
            required
            placeholder={session.username}
          />
          <button>Update</button>
        </form>
    </div>
  );
}

export default Profile;
  