import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import css from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy } = useContext(ProductContext);
  return (
    <div className={`${css.buttonsContainer} ${className}`} style={style}>
      <button className={css.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={css.countLabel}>{counter}</div>
      <button className={css.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
