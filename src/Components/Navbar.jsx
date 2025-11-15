import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between my-10">
      <div></div>
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
        <img src="/src/assets/user.png" alt="" />
        <Link to='/auth/login' className="btn btn-primary px-10">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
