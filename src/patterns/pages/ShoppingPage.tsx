import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";

import { products } from "../../data/product";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          product={product}
          className="bg-dark"
          key={product.id}
          initialValues={{ count: 4, maxCount: 10 }}
        >
          {(msg) => (
            <>
              <ProductImage img={product.img} className="custom-image" />
              <ProductTitle
                title={"no problems"}
                className="text-white text-bold text-capitalize"
              />
              <ProductButtons className="custom-buttons" />
              <h2>{msg}</h2>
            </>
          )}
        </ProductCard>
      </div>

      {/* <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div> */}
    </div>
  );
};

export default ShoppingPage;
