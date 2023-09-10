import { of } from "rxjs";

export const ofExample = () => {
  const obj$ = of<any>(1, 2, 3);

  obj$.subscribe((value) => {
    console.log("test of: ", value);
  });
};
