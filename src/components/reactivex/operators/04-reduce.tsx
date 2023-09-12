import { from } from "rxjs";
import { map, reduce, tap } from "rxjs/operators";

const ReduceSample = () => {
  interface IUPromedio {
    nombre: string;
    nota: number;
  }
  const promedio: IUPromedio[] = [
    {
      nombre: "juan",
      nota: 10,
    },
    {
      nombre: "juan",
      nota: 9,
    },
    {
      nombre: "juan",
      nota: 5,
    },
  ];

  const totalReducer = (accumulador: number, valorctual: number) => {
    return accumulador + valorctual;
  };

  from(promedio)
    .pipe(
      map((value) => value.nota),
      reduce(totalReducer, 0)
    )
    .subscribe(console.log);
};

export default ReduceSample;
