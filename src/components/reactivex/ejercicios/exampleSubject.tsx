import { Subject, Observer } from "rxjs";

// crear un observable con el subject para simular que un usuario envia tweets y los subscriptes (lectore)
// reciban y lo muestren
const tweetSubject$ = new Subject<string>();

const sendTweets = (tweet: string) => {
  tweetSubject$.next(tweet);
};

const followUser = (username: string) => {
  const observer: Observer<any> = {
    next: (tweet) => {
      console.log(`@${username} recibio un nuewvo tweet: ${tweet}`);
    },
    error: (err) => {
      console.log(`@${username} recibio un error`);
    },
    complete: () => {
      console.log(`@${username} dejo de seguir al observable`);
    },
  };
  const subscription = tweetSubject$.subscribe(observer);

  return subscription;
};

export const ExampleSubject = () => {
  const subscriptor1 = followUser("user-1");
  const subscriptor2 = followUser("user-2");

  sendTweets("Hola!");
  sendTweets("Tweet eejemplo!");
  sendTweets("el RXJS es cool");

  setTimeout(() => {
    subscriptor1.unsubscribe();
  }, 5000);

  setTimeout(() => {
    sendTweets("Hola! a todos los que quedaron!");
  }, 7000);
};
