import { range, asyncScheduler } from "rxjs";

export const RangeSample = () => {
  const src$ = range(1, 3);

  console.log("inicio");
  src$.subscribe(console.log);
  console.log("fin");
};
