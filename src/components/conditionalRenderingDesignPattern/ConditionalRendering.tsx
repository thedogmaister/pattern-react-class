import React from "react";
import { TypeIF } from "./components/TypeIF";
import { TypeIFELSE } from "./components/TypeIFELSE";
import { TypeTernaria } from "./components/TypeTernaria";
import { TypeTwoAmpersant } from "./components/TypeTwoAmpersant";
import { TypeSwitch } from "./components/TypeSwitch";

const users = [{ id: "1", firstName: "string", lastName: "string" }];
export const ConditionalRendering = () => {
  return (
    <React.Fragment>
      <TypeIF list={users}></TypeIF>
      <TypeIFELSE></TypeIFELSE>
      <TypeTernaria todoList={["sdf", "df"]}></TypeTernaria>
      <TypeTwoAmpersant todoList={["wer", "sdfsd"]}></TypeTwoAmpersant>
      <TypeSwitch role="admin"></TypeSwitch>
    </React.Fragment>
  );
};
