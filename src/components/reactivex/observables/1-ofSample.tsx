import { of } from "rxjs";

export const ofExample = () => {
  const obj$ = of<any>(1, 2, 3);
  // const obj$ = of([1, 2, 3, 4, 5], function () {}, true);
  // const obj$ = of(Promise.resolve(true));

  console.log("inicio");
  obj$.subscribe(
    (value) => {
      console.log("test of: ", value);
    },
    (error) => console.log(error),
    () => console.log("complete")
  );
  console.log("fin");
};
