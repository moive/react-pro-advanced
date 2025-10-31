import { createContext, ReactElement, useContext } from "react";
import style from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return <img className={style.productImg} src={imgToShow} alt="Coffee Mug" />;
};

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);
  return <span className={style.productDescription}>{title ? title : product.title}</span>;
};

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext(ProductContext);
  return (
    <div className={style.buttonsContainer}>
      <button className={style.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={style.countLabel}>{counter}</div>
      <button className={style.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};

export const ProductCard = ({ product, children }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={style.productCard}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
