import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";

import { products } from "../../data/product";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage img={product.img} className="custom-image" />
            <ProductTitle title={"no problems"} className="text-white text-bold text-capitalize" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([index, product]) => (
          <ProductCard
            product={product}
            className="bg-dark"
            style={{ width: "100px" }}
            key={index}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage img={product.img} className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
      {/* <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div> */}
    </div>
  );
};

export default ShoppingPage;
