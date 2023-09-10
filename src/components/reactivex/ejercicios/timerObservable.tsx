// crear un observable que inicie un temporizador que emita valores cada segundo y
// vamos a permitir que el ususario haga click al button el con tador se cancele
import React, { useEffect, useState } from "react";
import { Observable, Observer } from "rxjs";

const TimerButton = () => {
  const startTemporizador$ = new Observable<number>((subcriber) => {
    let count = 0;
    const intervalId = setInterval(() => {
      count++;
      subcriber.next(count);
    }, 1000);
    return () => {
      subcriber.complete();
      clearInterval(intervalId);
    };
  });

  const timerSubscription = startTemporizador$.subscribe((value) => {
    console.log("segundos transcurridos: ", value);
  });

  return (
    <React.Fragment>
      <button
        onClick={() => {
          timerSubscription.unsubscribe();
          console.log("Temporizador cancelado");
        }}
      >
        Cancel Temporizador
      </button>
    </React.Fragment>
  );
};

export default TimerButton;
