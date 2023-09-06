import { useEffect, useRef, useState } from "react";
import { Products, onChangeArgs } from "../interfaces/interfaces";

interface useCounterArgs {
  product: Products;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}
export const useCounter = ({
  product,
  onChange,
  value = 0,
}: useCounterArgs) => {
  const [counter, setCounter] = useState(value);

  const isController = useRef(!!onChange);

  const increaseBy = (value: number) => {
    if (isController.current) {
      return onChange!({ count: value, product });
    }
    const newValue = Math.max(counter + value, 0);

    setCounter(newValue);

    // if (onChange) {
    onChange && onChange({ count: newValue, product });
    // }
  };
  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy,
  };
};
