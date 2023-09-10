import React from "react";
import { SimpleObservable } from "./ejercicios/simpleObservable";
import { FistObservable } from "./observables/FirstObservable";
import { SecondObservable } from "./observables/SecondObservable";
import { SubjectObservable } from "./observables/SubjectObservable";
import TimerButton from "./ejercicios/timerObservable";
import { SumulationDownloadFile } from "./ejercicios/simulationDownloadFile";
import { ExampleSubject } from "./ejercicios/exampleSubject";
import { ofExample } from "./observables/ofSample";

const ObservablesMain = () => {
  //   FistObservable();
  //   SecondObservable();
  // SubjectObservable();
  // SimpleObservable();
  // SumulationDownloadFile();
  // ExampleSubject();
  ofExample();
  return (
    <React.Fragment>
      <h1>Observables </h1>
      {/* <TimerButton /> */}
    </React.Fragment>
  );
};

export default ObservablesMain;
