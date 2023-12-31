import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBer = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-base-100 justify-between h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
                <li>
                  <Link to="/blog">Blogs</Link>
                </li>
              <li>
                <Link to="/alltoy"> All Toys</Link>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <Link to="/mytoy">My Toys</Link>
                  </li>
                  <li>
                    <Link to="/addToy"> Add Toy</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout}>Sing Out</button>
                  </li>
                  <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
            </>
          </ul>
        </div>
        <Link className="flex items-center gap-5" to="/">
          <img
            className="w-[50px]"
            src="https://i.ibb.co/b6835nB/peakpx.png"
            alt=""
          />
          <h1>Avengers Playsets</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            <li>
              <Link to="/alltoy"> All Toys</Link>
            </li>
            {user?.email ? (
              <>
                <li>
                  <Link to="/mytoy">My Toys</Link>
                </li>
                <li>
                  <Link to="/addToy"> Add Toy</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Sing Out</button>
                </li>
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </>
        </ul>
      </div>
    </div>
  );
};

export default NavBer;
