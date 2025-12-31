import { useState } from "react";

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { Product } from "../interfaces/product.interface";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
    // console.log("onProductCountChange", count, product);
    setShoppingCart((oldValue) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldValue;
        return rest;
      }
      return { ...oldValue, [product.id]: { ...product, count } };
    });
  };
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark"
            key={product.id}
            onChange={(event) => onProductCountChange(event)}
          >
            <ProductImage img={product.img} className="custom-image" />
            <ProductTitle title={"no problems"} className="text-white text-bold text-capitalize" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        <ProductCard product={product2} className="bg-dark" style={{ width: "100px" }}>
          <ProductImage img={product2.img} className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard product={product} className="bg-dark" style={{ width: "100px" }}>
          <ProductImage img={product.img} className="custom-image" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};

export default ShoppingPage;
