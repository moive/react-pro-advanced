import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/product.interface";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
    // console.log({ count });
    setShoppingCart((oldValue) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldValue;
        return rest;
      }
      return { ...oldValue, [product.id]: { ...product, count } };
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};
