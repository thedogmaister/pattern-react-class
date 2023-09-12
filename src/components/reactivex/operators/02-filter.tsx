import { setDefaultResultOrder } from "dns";
import { from, fromEvent, range } from "rxjs";
import { filter, map, mapTo } from "rxjs/operators";

export const FilterSample = () => {
  //   range(1, 4)
  //     .pipe(
  //       filter((value, i) => {
  //         return value % 2 === 1;
  //       })
  //     )
  //     .subscribe(console.log);

  interface IUser {
    name: string;
    lastName: string;
    isActive: boolean;
  }
  const user: IUser[] = [
    {
      name: "Juan",
      lastName: "Test",
      isActive: true,
    },
    {
      name: "Kenyi",
      lastName: "Lopez",
      isActive: false,
    },
    {
      name: "Margarita",
      lastName: "Perez",
      isActive: true,
    },
  ];

  from(user)
    .pipe(filter((users) => users.isActive))
    .subscribe((value) => console.log(value));

  fromEvent<KeyboardEvent>(document, "keyup")
    .pipe(
      map((event) => event.key),
      filter((key) => key === "Enter")
    )
    .subscribe(console.log);
};
