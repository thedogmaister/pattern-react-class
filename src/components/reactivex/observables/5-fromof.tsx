import { of, from, Observer } from "rxjs";

export const FromOfSample = () => {
  const observer: Observer<any> = {
    next: (value) => console.log(value),
    error: (err) => console.log(err),
    complete: () => console.log("complete"),
  };
  //   const source$ = of([1, 2, 3, 4, 5, 6]);
  const source$ = from(fetch("/data.json"));

  console.log("inicio");
  source$.subscribe(observer);
  console.log("fin");
};
