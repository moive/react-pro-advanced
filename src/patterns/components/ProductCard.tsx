import { createContext, ReactElement } from "react";
import css from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { ProductCardProps, ProductContextProps } from "../interfaces/product.interface";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${css.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
