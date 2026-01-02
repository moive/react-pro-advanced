import { createContext } from "react";
import css from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";
import { ProductCardProps, ProductContextProps } from "../interfaces/product.interface";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${css.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            isMaxCountReached,
            maxCounter: initialValues?.maxCount,
            product,
            increaseBy,
            reset,
          })}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
