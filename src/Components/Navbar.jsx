import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import userPlaceholder from "../assets/user.png";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    // console.log("user trying to logout");
    logOut().then(() => {
      alert("you logged out successfully").error((error) => {
        console.log(error);
      });
    });
  };

  return (
    <div className="flex justify-between my-10">
      <div>{user && user.email}</div>
      <div className="text-accent flex gap-5">
        <Link className="btn btn-ghost" to="/">
          {" "}
          Home{" "}
        </Link>
        <Link className="btn btn-ghost" to="/about">
          {" "}
          About{" "}
        </Link>
        <Link className="btn btn-ghost" to="/career">
          {" "}
          Career{" "}
        </Link>
      </div>

      <div className="flex gap-5">
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
        <img className="W-12 rounded-full" src={user?.photoURL || userPlaceholder} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
