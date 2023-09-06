import { IPorductCardHOCProps } from "../interfaces/interfaces";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCounter } from "./ProductCounter";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
export { ProductTitle } from "./ProductTitle";
export { ProductImage } from "./ProductImage";

export const ProductCard: IPorductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Button: ProductCounter,
});
