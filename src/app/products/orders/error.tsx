"use client";
// error.tsx должен быть Client Component, поэтому используется: "use client"
// Компонент получает объект: error

export default function Error({
  error,
  reset, // reset() позволяет повторить попытку рендера проблемного сегмента.
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Что-то пошло не так!</h2>
      <br />
      {/* <p>{error.message}</p> */}
      {/* здесь будет свойство error из Page/tsx. throw new Error("Тестовая ошибка для Products/orders!"); */}
      <br />
      <button onClick={reset}>Попробовать снова</button>
      {/* <button onClick={() => reset()}></button> */}
      {/* reset() не означает «исправить ошибку».Он означает:
«Попробуй ещё раз отрендерить этот проблемный сегмент». */}
    </div>
  );
}

// 1
// То есть вместо:

// function Error(props) {
//   console.log(props.error);
// }

// мы сразу получаем:

// function Error({ error }) {
//   console.log(error);
// }

//  2
// Теперь смотрим:

// {
//   error
// }: {
//   error: Error
// }

// Первая часть:
// error — название свойства.

// Вторая:
// : Error — TypeScript говорит: error должен иметь тип Error.

// То есть:
// error: Error означает:

// переменная error
//       ↓
// имеет тип Error

// 3
// Знак: ? означает, что свойство необязательное.
// То есть digest может быть: есть или: нет

// Например:
// {
//   error: ...,
//   digest: "123456"
// }

// или:

// {
//   error: ...
// }
