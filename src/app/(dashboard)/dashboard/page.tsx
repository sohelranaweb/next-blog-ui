import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth";

const DashboardHomePage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div>
      <h1>Dashboard Home Page</h1>
      <h1 className="text-xl">Welcome, {session?.user?.name}</h1>
      <p>{session?.user?.email}</p>
    </div>
  );
};

export default DashboardHomePage;
