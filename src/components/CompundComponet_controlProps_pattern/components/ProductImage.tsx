import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface ProductImageProps {
  image?: string;
  className?: string;
  style?: React.CSSProperties;
}
export const ProductImage = ({
  image,
  className,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  // const {image} = props
  let imageShow: string;

  if (image) {
    imageShow = image;
  } else if (product.image) {
    imageShow = product.image;
  } else {
    imageShow = "";
  }

  return (
    <img
      className={className}
      width={100}
      height={100}
      src={imageShow}
      alt="product view"
      style={style}
    />
  );
};
