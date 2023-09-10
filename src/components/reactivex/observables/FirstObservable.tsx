import { Observable, Observer } from "rxjs";

export const FistObservable = () => {
  const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.warn("error"),
    complete: () => console.info("complete"),
  };

  const obs$ = new Observable<string>((subscriber) => {
    subscriber.next("rojo");
    subscriber.next("amarillo");
    subscriber.next("verde");

    // para forzar el error
    // const a = undefined;
    // a.nombre = "verde";

    subscriber.complete();

    subscriber.next("anaranjado");
    subscriber.next("celeste");
    subscriber.next("lila");
  });

  obs$.subscribe(observer);
};
