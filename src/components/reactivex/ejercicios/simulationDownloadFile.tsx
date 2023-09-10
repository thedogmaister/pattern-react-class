// estamos creando una aplicacion de descarga de arrchivos.
// Crear un Observable que simule la descarga de un archivo y cancele la descarga
// cundo se cancele la descarga debe pintar un log que se cancelo

import { Observable, Observer } from "rxjs";

export const SumulationDownloadFile = () => {
  const downloadFile$ = new Observable<number>((subcriber) => {
    let progress = 0;
    const intervalId = setInterval(() => {
      if (progress < 100) {
        progress += 10;
        subcriber.next(progress);
      } else {
        subcriber.complete();
        clearInterval(intervalId);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  const observer: Observer<number> = {
    next: (value) => {
      console.log(`Descargando archivo: ${value}% completado`);
    },
    error: (err) => {
      console.log(`Error: ${err}`);
    },
    complete: () => {
      console.log("descarga completeada");
    },
  };

  const userSubcribe = downloadFile$.subscribe(observer);
  setTimeout(() => {
    userSubcribe.unsubscribe();
    console.log("descarga cancelada");
  }, 5000);
};
