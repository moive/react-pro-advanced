import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/product.interface";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
    // console.log({ count });
    setShoppingCart((oldValue) => {
      const productInCart: ProductInCart = oldValue[product.id] || { ...product, count: 0 };

      if (Math.max(productInCart.count + count, 0) > 0) {
        return {
          ...oldValue,
          [product.id]: {
            ...productInCart,
            count: productInCart.count + count,
          },
        };
      }

      const { [product.id]: toDelete, ...rest } = oldValue;
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldValue;
      //   return rest;
      // }
      // return { ...oldValue, [product.id]: { ...product, count } };
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};
