import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage img={product.img} className="custom-image" />
          <ProductTitle title={"no problems"} className="text-white text-bold text-capitalize" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
