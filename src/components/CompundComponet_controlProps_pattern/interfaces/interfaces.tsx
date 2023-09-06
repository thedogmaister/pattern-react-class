import { PorductCardProps } from "../components/ProductCard";
import { ProductCounterProps } from "../components/ProductCounter";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";

export interface Products {
  id: string;
  image: string;
  title: string;
}
export interface ProductsContextProps {
  product: Products;
  increaseBy: (value: number) => void;
  counter: number;
}
export interface IPorductCardHOCProps {
  ({ children, product }: PorductCardProps): JSX.Element;
  Title: ({ title }: ProductTitleProps) => JSX.Element;
  Image: ({ image }: ProductImageProps) => JSX.Element;
  Button: ({ clasNames, style }: ProductCounterProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Products;
  count: number;
}
