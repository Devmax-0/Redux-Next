import Product from "@/components/product";
import { useDispatch, useSelector } from "react-redux";
import products from "../components/products.json";
import Cart from "@/components/cart";

const Home = () => {
  return (
    <>
      <div>
        <Cart />
      </div>
      {products.map((product) => (
        // eslint-disable-next-line react/jsx-key
        <Product {...product} />
      ))}
    </>
  );
};

export default Home;
