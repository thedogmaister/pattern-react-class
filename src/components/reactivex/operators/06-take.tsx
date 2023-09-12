import { of } from "rxjs";
import { take, tap } from "rxjs/operators";

const TakeSample = () => {
  const numeros$ = of("a", "b", "c", "d").pipe(take(2));
  numeros$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("Complete"),
  });
};
export default TakeSample;
