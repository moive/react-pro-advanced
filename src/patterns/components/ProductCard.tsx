import style from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";

export const ProductCard = () => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={style.productCard}>
      <img className={style.productImg} src="./coffee-mug.png" alt="Coffee Mug" />
      {/* <img className={style.productImg} src={noImage} alt="Coffee Mug" /> */}

      <span className={style.productDescription}>Coffee Mug</span>
      <div className={style.buttonsContainer}>
        <button className={style.buttonMinus} onClick={() => increaseBy(-1)}>
          {" "}
          -{" "}
        </button>
        <div className={style.countLabel}>{counter}</div>
        <button className={style.buttonAdd} onClick={() => increaseBy(1)}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};
