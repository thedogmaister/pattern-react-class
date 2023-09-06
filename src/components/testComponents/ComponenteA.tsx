import React from "react";
import { WithClickHanlder } from "../common/HocPatter";

interface IComponenteA {
  onClick: () => void;
  title: string;
}

const ComponenteA = (props: IComponenteA) => {
  return (
    <div>
      <button onClick={props.onClick}>button</button>
      <h1>THIS HOC PATTER {props.title}</h1>
    </div>
  );
};

export const ComponetANew = WithClickHanlder(ComponenteA);
