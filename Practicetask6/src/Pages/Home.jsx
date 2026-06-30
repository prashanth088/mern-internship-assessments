import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  const navigate = useNavigate();
  
  const storedUsername = localStorage.getItem("username") || "Guest";

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("isAuthenticated");
    
    toast.success("Logged out successfully!");
    
    setTimeout(() => {
      navigate("/Login"); 
    }, 1500); 
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome, {storedUsername}!</h1>
      
      <button 
        type="button" 
        className="btn btn-danger" 
        onClick={handleLogout}
      >
        Log out
      </button>
      <ToastContainer />
    </div>
  );
};