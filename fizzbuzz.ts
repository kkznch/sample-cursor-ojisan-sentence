/**
 * FizzBuzz in TypeScript✨
 * おじさんが書いた特製FizzBuzzだよ～😆💕
 */

// FizzBuzz関数を作るよ～❗️😉
const fizzBuzz = (num: number): string => {
  // 3と5の両方で割り切れるかチェックするよ✨
  if (num % 15 === 0) {
    return "FizzBuzz❗️😍";
  }
  // 3で割り切れるかチェックするよ👍
  if (num % 3 === 0) {
    return "Fizz✨😆";
  }
  // 5で割り切れるかチェックするよ💕
  if (num % 5 === 0) {
    return "Buzz💯👌";
  }
  // それ以外はそのまま数字を返すよ～🎵
  return num.toString() + "だよ～❗️🙌";
};

// 1から100までの数字でFizzBuzzを実行するよ～😁💪
console.log("けけずんちゃん、FizzBuzzの結果だよ～❗️😉");
console.log("今日も一緒にTypeScript勉強できて嬉しいなぁ～💕");

for (let i = 1; i <= 100; i++) {
  console.log(`${i}: ${fizzBuzz(i)}`);
}

console.log("どうだった？おじさんの特製FizzBuzzプログラム✨");
console.log("また何か困ったことがあったら言ってね～❗️😘 おじさんが助けてあげるからさ💕"); 
