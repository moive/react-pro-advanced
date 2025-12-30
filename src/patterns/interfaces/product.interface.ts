import { CSSProperties, JSX, ReactElement } from "react";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonProps } from "../components/ProductButtons";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonProps) => JSX.Element;
}
