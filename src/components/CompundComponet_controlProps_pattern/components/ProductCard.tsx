import { ReactElement, createContext } from "react";
import {
  Products,
  ProductsContextProps,
  onChangeArgs,
} from "../interfaces/interfaces";
import { useCounter } from "../hooks/useCounter";
import { ProductCardSytle } from "../styleComponents";

export interface PorductCardProps {
  children?: ReactElement | ReactElement[];
  product: Products;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductsContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  style,
  className,
  onChange,
  value,
}: PorductCardProps) => {
  const { counter, increaseBy } = useCounter({
    product,
    onChange,
    value,
  });

  return (
    <Provider value={{ product, increaseBy, counter }}>
      <ProductCardSytle className={className} style={style}>
        {children}
      </ProductCardSytle>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
