import { from } from "rxjs";
import { scan, reduce } from "rxjs/operators";

const ScanSample = () => {
  const numeros = [1, 3, 5];
  const totalAcumulator = (acc: number, curr: number) => acc + curr;

  // reduce
  from(numeros)
    .pipe(reduce(totalAcumulator))
    .subscribe({
      next: (value) => console.log(value),
      complete: () => console.log("Completed"),
    });

  // scan
  from(numeros)
    .pipe(scan(totalAcumulator))
    .subscribe({
      next: (value) => console.log(value),
      complete: () => console.log("Completed"),
    });

  // redux
  interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
  }
  const user: Usuario[] = [
    {
      id: "test",
      autenticado: false,
      token: "",
    },
    {
      id: "test",
      autenticado: true,
      token: "fsdf",
    },
    {
      id: "test",
      autenticado: true,
      token: "erewr12",
    },
  ];

  const stateSrc$ = from(user).pipe(
    scan(
      (acc, curr) => {
        return { ...acc, ...curr };
      },
      { edad: 20 }
    )
  );

  stateSrc$.subscribe(console.log);
};

export default ScanSample;
