/**
 * TYPESCRIPT
 * JAVASCRIPT + AUDITORÍAS DE TIPADO
 *
 * Que cada variable y función conozcan el tipo de dato que representan, tienen de entrada o generan de salida.
 */

/**
Primitivos
string
number
boolean
null
undefined

No primitivos (object)
objetos
arreglos
funciones
 */

// const celular: string = "iPhone";
// const edad: number = 35;

// const desayuno: { bebida: string; platoFuerte: string } = {
//   bebida: "leche",
//   platoFuerte: "hot cakes",
// };

// interface Meal {
//   bebida: string;
//   platoFuerte: string;
// }

// const desayuno: Meal = {
//   bebida: "leche",
//   platoFuerte: "hot cakes",
// };

// const comida: Meal = {
//   bebida: "agua de jamaica",
//   platoFuerte: "Milanesa de res",
// };

// const sum = (a: number, b: number): number => {
//   const result = a + b;
//   return result;
// };

// sum(5, 2);

function Header() {
  return <header>Este es el layout Mike</header>;
}

export default function MikeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
