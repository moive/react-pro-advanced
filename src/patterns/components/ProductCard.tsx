import { createContext, ReactElement } from "react";
import style from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { ProductCardProps, ProductContextProps } from "../interfaces/product.interface";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${style.productCard} ${className}`}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
