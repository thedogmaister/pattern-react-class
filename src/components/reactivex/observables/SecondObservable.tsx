import { Observable, Observer } from "rxjs";

export const SecondObservable = () => {
  const observer: Observer<any> = {
    next: (value) => console.log("next: ", value),
    error: (error) => console.warn("error"),
    complete: () => console.info("complete"),
  };

  const obs$ = new Observable<number>((subscriber) => {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      subscriber.next(count);
      console.log(count);
    }, 1000);

    setTimeout(() => {
      subscriber.complete();
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  });

  const suscriptor1 = obs$.subscribe(observer);
  const suscriptor2 = obs$.subscribe(observer);
  const suscriptor3 = obs$.subscribe(observer);

  setTimeout(() => {
    suscriptor1.unsubscribe();
    suscriptor2.unsubscribe();
    suscriptor3.unsubscribe();
    console.log("complete timeout");
  }, 5000);
};
