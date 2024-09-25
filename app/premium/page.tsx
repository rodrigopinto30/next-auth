import { getSession } from "@/actions/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

const Premium = async () => {

  const session = await getSession();

  if(!session.isLoggedIn) redirect("/");

  if(!session.isPro) {
    return (
      <div className="notPremium">
        <h1>Only premium users can see the content!</h1>
        <Link href="/profile">Go to the profile page to upgrade to premium</Link>
      </div>
    )
  }

  return (
      <div className="premium">
          <h1 className="font-bold">Welcome to PremiumPage</h1>
          <p>This page is visible to <b>premium user</b></p>
      </div>
    );
  }

  export default Premium;