import { Observer, interval, timer } from "rxjs";

const observer: Observer<any> = {
  next: (value: any) => console.log(value),
  error: (err: any) => console.log(err),
  complete: () => console.log("complete"),
};
export const IntervalSample = () => {
  //   let counter = 0;
  //   setInterval(() => {
  //     counter++;
  //     console.log(counter);
  //   }, 1000);

  const interval$ = interval(1000);
  console.log("inicio");
  interval$.subscribe(observer);
  console.log("fin");
};

export const TimerSample = () => {
  //   setTimeout(() => {
  //     console.log("console after 1 second∫");
  //   }, 2000);

  //   const timer$ = timer(2000, 1000);
  //   console.log("inicio");
  //   timer$.subscribe(observer);
  //   console.log("fin");

  const hoyseg5 = new Date();
  hoyseg5.setMinutes(hoyseg5.getMinutes() + 1);
  hoyseg5.setSeconds(hoyseg5.getSeconds() + 3);

  const timer$ = timer(hoyseg5);
  console.log("inicio");
  timer$.subscribe((value) => console.log("value: ", value));
  console.log("fin");
};

export const IntervalTimerSample = () => {
  //   IntervalSample();
  TimerSample();
};
