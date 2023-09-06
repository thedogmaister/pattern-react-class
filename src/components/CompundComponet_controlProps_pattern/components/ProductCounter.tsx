import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import {
  ButtonAdd,
  ButtonMinus,
  ContainerButtons,
  CountLabel,
} from "../styleComponents";

export interface ProductCounterProps {
  clasNames?: string;
  style?: React.CSSProperties;
}
export const ProductCounter = ({ clasNames, style }: ProductCounterProps) => {
  const { counter, increaseBy } = useContext(ProductContext);

  return (
    <ContainerButtons className={clasNames} style={style}>
      <div>
        <ButtonMinus
          onClick={() => {
            increaseBy(-1);
          }}
        >
          -
        </ButtonMinus>
      </div>
      <CountLabel>{counter}</CountLabel>
      <div>
        <ButtonAdd
          onClick={() => {
            increaseBy(+1);
          }}
        >
          +
        </ButtonAdd>
      </div>
    </ContainerButtons>
  );
};
