import { useContext } from "react";

import style from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

import { ProductContext } from "./ProductCard";

export interface Props {
  img?: string;
  className?: string;
}

export const ProductImage = ({ img = "", className }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (!!img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return <img className={`${style.productImg} ${className}`} src={imgToShow} alt="Coffee Mug" />;
};
