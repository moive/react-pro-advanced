import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/product.interface";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ onChange, product }: useProductArgs) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    setCounter((prev) => {
      const newValue = Math.max(prev + value, 0);
      onChange && onChange({ count: newValue, product });
      return newValue;
    });
  };

  return {
    counter,
    increaseBy,
  };
};
