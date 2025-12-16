import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import register from "../assets/register.webp";
import { registerUser } from "../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/slice/cartSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId, loading, error } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  // Get redirect parameter and check if its checkout or something else
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isChecheckoutRedirect = redirect.includes("checkout");

  useEffect(() => {
    if (user) {
      if (cart?.products?.length > 0 && guestId) {
        // Merge guest products and userProducts
        dispatch(mergeCart(guestId, user)).then(() => {
          navigate(isChecheckoutRedirect ? "/checkout" : "/");
        });
      } else {
        navigate(isChecheckoutRedirect ? "/checkout" : "/");
      }
    }
  }, [user, guestId, cart, navigate, isChecheckoutRedirect, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({name, email, password}));
  }

  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        {/* Login Form */}
        <form
        onSubmit={handleSubmit}
          action=""
          className="w-full max-w-md p-8 rounded-lg border shadow-sm "
        >
          {/* Brand Name */}
          <div className="flex justify-center mb-4">
            <h2 className="text-xl font-semibold">Rabbit</h2>
          </div>

          {/* Welcome Text */}
          <h2 className="text-2xl font-bold text-center mb-4">Hey there!👋</h2>
          <p className="text-center mb-4">
            Enter your username and password to Login
          </p>

          {/* Name*/}
          <div className="mb-4">
            <label htmlFor="" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your Name"
            />
          </div>

          {/* Email*/}
          <div className="mb-4">
            <label htmlFor="" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email address"
            />
          </div>


          {/* Password */}
          <div className="mb-4">
            <label htmlFor="" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            {loading? "loading...":"Sign Up"}
          </button>

          {/* Register */}
          <p className="mt-6 text-center text-sm">
            Have an account?{" "}
            <Link to={`/login/redirect=${encodeURIComponent(redirect)}`} className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={register}
            alt="Register Account"
            className="h-[650px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
