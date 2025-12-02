import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();

  const handleCheckoutButton = () => {
    toggleCartDrawer();
    navigate("/checkout");
  };
  return (
    <div
      className={`fixed top-0 right-0  w-3/4 sm:w-1/2 md:w-100 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button className="flex justify-end p-4" onClick={toggleCartDrawer}>
        <IoMdClose className="w-6 h-6 text-gray-600 hover:text-gray-800" />
      </button>

      {/* Cart contents with scrollable area */}
      <div className="grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        {/* Component for Cart Contents */}
        <CartContents />
      </div>

      {/* Checkout button fixed at bottom*/}
      <div className="p-4 bg-white sticky bottom-0">
        <button
          onClick={handleCheckoutButton}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-100"
        >
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discount codes calculated ar checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
