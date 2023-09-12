import React from "react";
import { SimpleObservable } from "./ejercicios/simpleObservable";
import { FistObservable } from "./observables/FirstObservable";
import { SecondObservable } from "./observables/SecondObservable";
import { SubjectObservable } from "./observables/SubjectObservable";
import TimerButton from "./ejercicios/timerObservable";
import { SumulationDownloadFile } from "./ejercicios/simulationDownloadFile";
import { ExampleSubject } from "./ejercicios/exampleSubject";
import { ofExample } from "./observables/1-ofSample";
import { FromEventSample } from "./observables/2-fromevent";
import { RangeSample } from "./observables/3-range";
import { IntervalTimerSample } from "./observables/4-intervalTimer";
import { FromOfSample } from "./observables/5-fromof";
import { MapSample } from "./operators/01-map";
import { FilterSample } from "./operators/02-filter";
import { TapSample } from "./operators/03-tap";
import ReduceSample from "./operators/04-reduce";
import ScanSample from "./operators/05-scan";
import TakeSample from "./operators/06-take";
import FirstSample from "./operators/07-first";

const ObservablesMain = () => {
  //   FistObservable();
  //   SecondObservable();
  // SubjectObservable();
  // SimpleObservable();
  // SumulationDownloadFile();
  // ExampleSubject();
  // ofExample();
  // FromEventSample();
  // RangeSample();
  // IntervalTimerSample();
  // FromOfSample();
  // MapSample();
  // FilterSample();
  // TapSample();
  // ReduceSample();
  // ScanSample();
  // TakeSample();
  FirstSample();
  return (
    <React.Fragment>
      <h1>Observables </h1>
      {/* <TimerButton /> */}
    </React.Fragment>
  );
};

export default ObservablesMain;
