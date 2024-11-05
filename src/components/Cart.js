import { useSelector } from "react-redux";
import { clearCart } from "../elementary/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center m-4 p-4 w-6/12">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <button
          className="p-2 m-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 ? (
          <h2 className="text-lg font-medium text-gray-600">Cart is empty. Add items to the cart!</h2>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
