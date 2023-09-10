import { Observable, Subject } from "rxjs";

export const SubjectObservable = () => {
  const obs$ = new Observable<number>((subscriber) => {
    const intervalID = setInterval(() => subscriber.next(Math.random()), 3000);
    return () => {
      clearInterval(intervalID);
    };
  });
  const subject$ = new Subject();
  const subcripcion = obs$.subscribe(subject$);

  const subs1 = subject$.subscribe(console.log);
  const subs2 = subject$.subscribe(console.log);

  setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subcripcion.unsubscribe();
  }, 5000);
};
