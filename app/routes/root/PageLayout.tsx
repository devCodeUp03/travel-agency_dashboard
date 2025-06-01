import { useNavigate } from "react-router";
import { logoutUser } from "~/appwrite/auth";
const PageLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/sign-in");
  };
  return (
    <div className="flex gap-4 h-[100vh] items-center justify-center">
      <button onClick={handleLogout} className="cursor-pointer">
        <img src="/assets/icons/logout.svg" alt="logout" className="size-6" />
        
      </button>
      <h1 className="text-4xl font-semibold">ONLY <span className="font-extrabold text-green-700">ADMIN</span> CAN VISIT ADMIN DASHBOARD</h1>
    </div>
  );
};

export default PageLayout;
