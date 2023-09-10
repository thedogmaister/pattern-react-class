import { Observable, Observer } from "rxjs";

// crear un observable que emita tres numeros (por ejemplo  1,2,3) y nos vamos a subscribir al observable para
// escuchar los eventos y mostrarlos en consola
// observable$ ---------1-----------------2------------------3----------|---------->
export const SimpleObservable = () => {
  const observable$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    // simulate error
    // const a = undefined;
    // a.name = "a";
    subscriber.complete();
  });

  //   observable$.subscribe(
  //     (value) => console.log(value),
  //     (error) => console.log(error),
  //     () => console.log("completado")
  //   );
  const observer: Observer<any> = {
    next: (value) => console.log(value),
    error: (error) => console.log(error),
    complete: () => console.log("complete"),
  };
  observable$.subscribe(observer);
};
