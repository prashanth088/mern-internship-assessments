import { useRef } from "react";
import "../assets/style/LoginStylings.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const userNameRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const username = userNameRef.current.value;
    const password = passwordRef.current.value;


    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("isAuthenticated", "true");

    toast.success("Login Successful");

    
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <div id="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <div className="container">
            <div className="row">
              <h2 className="text-center bg-warning-subtle">Login Form</h2>
            </div>

            <div className="row">
              <div className="col">
                <label>UserName</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  ref={userNameRef}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  ref={passwordRef}
                  required
                />
              </div>
            </div>

            <div className="row px-5">
              <button type="submit" className="btn btn-primary my-2">
                Login
              </button>
              <button type="reset" className="btn btn-warning">
                Cancel
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;