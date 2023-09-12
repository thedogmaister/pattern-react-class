import { fromEvent, of } from "rxjs";
import { first } from "rxjs/operators";
const FirstSample = () => {
  //   const fistElement$ = of("a", "b", "c", "d").pipe(
  //     first((value) => value === "b")
  //   );
  const fistElement$ = fromEvent<PointerEvent>(document, "click").pipe(
    first((value) => value.clientY >= 150)
  );
  fistElement$.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("Complete"),
  });
};

export default FirstSample;
