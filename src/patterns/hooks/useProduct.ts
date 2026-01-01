import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/product.interface";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
    // setCounter((prev) => Math.max(prev + value, 0));
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  // useEffect(() => {
  //   setCounter(value);
  // }, [value]);

  // useEffect(() => {
  //   onChange && onChange({ count: counter, product });
  // }, [counter, product]);

  return {
    counter,
    increaseBy,
  };
};
