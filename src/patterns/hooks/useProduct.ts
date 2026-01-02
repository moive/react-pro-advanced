import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product, InitialValues } from "../interfaces/product.interface";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const maxCount = initialValues?.maxCount;
    let newValue = Math.max(counter + value, 0);

    if (maxCount) {
      newValue = Math.min(newValue, maxCount);
    }

    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    increaseBy,
    reset,
  };
};
