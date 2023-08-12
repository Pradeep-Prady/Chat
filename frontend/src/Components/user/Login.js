import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthError, login } from "../../actions/userAtions";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.authState
  );

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("login success");
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
  }, [error, isAuthenticated, dispatch, navigate]);

  return (
    <>
      <div className="login ">
        <div className="row wrapper">
          <div className="col-10 col-lg-5">
            <form onSubmit={submitHandler}>
              <h3>Login</h3>
              <div className="form-group">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="email"
                  className="form-control"
                  autoComplete="off"
                  value={email}
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="password">Password</label> */}
                <input
                  type="password"
                  className="form-control"
                  autoComplete="off"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="btn" type="submit" disabled={loading}>
                Login
              </button>

              <div className="form-group links">
                <Link className="link" to="/password/forgot">
                  forgot password?
                </Link>
                <Link className="link" to="/register">
                  Register?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
