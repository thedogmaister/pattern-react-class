import { from, range } from "rxjs";
import { map } from "rxjs/operators";

export const MapSample = () => {
  const user = [
    {
      name: "Juan",
      lastname: "Perez",
    },
    {
      name: "Juan2",
      lastname: "Perez",
    },
    {
      name: "Juan2",
      lastname: "Perez",
    },
  ];
  //   range(1, 3)
  //     .pipe(map((value) => 10 * value-1))
  //     .subscribe((value) => console.log(value));
  from(user)
    .pipe(
      map((value) => {
        return { ...value, status: 0 };
      })
    )
    .subscribe((value) => console.log(value));
};
