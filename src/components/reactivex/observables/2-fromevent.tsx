import { fromEvent } from "rxjs";

export const FromEventSample = () => {
  const clickEvent$ = fromEvent<PointerEvent>(document, "click");
  const keyEvent$ = fromEvent<KeyboardEvent>(document, "keyup");

  const obeserver = {
    next: (value: KeyboardEvent) => console.log("next: ", value.code),
  };

  clickEvent$.subscribe(console.log);
  keyEvent$.subscribe(obeserver);
};
