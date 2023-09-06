import React from "react";
import { WithClickHanlder } from "../common/HocPatter";

interface IComponenteB {
  onClick: () => void;
  title: string;
}

const ComponenteB = (props: IComponenteB) => {
  return (
    <div>
      <button onClick={props.onClick}>component b</button>
      <h1>THIS HOC PATTERN B {props.title}</h1>
    </div>
  );
};
export const ComponetBNew = WithClickHanlder(ComponenteB);
