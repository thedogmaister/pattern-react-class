import { error } from "console";
import { fromEvent } from "rxjs";
import { map, filter, tap } from "rxjs/operators";

export const TapSample = () => {
  fromEvent<KeyboardEvent>(document, "keyup")
    .pipe(
      map((event) => event.key),
      tap((value) => {
        console.log("data: " + value);
      }),
      filter((key) => key === "Enter"),
      tap((value) => {
        alert("tu as presionado enter!");
      })
    )
    .subscribe(console.log);
};
