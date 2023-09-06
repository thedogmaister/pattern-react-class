import React from "react";

const LoggedUser = () => {
  return (
    <React.Fragment>
      <h1>logout</h1>
    </React.Fragment>
  );
};

export const UnLoggedUser = () => {
  return (
    <React.Fragment>
      <h1>login</h1>
    </React.Fragment>
  );
};
export const TypeIFELSE = ({ isLogued }: { isLogued?: boolean }) => {
  if (isLogued) {
    return <LoggedUser />;
  } else {
    return <UnLoggedUser />;
  }
};
