// ✅ 1. Mostrar el valor de t = 10
var t = 0;
function test() {
  t = 10; // modificamos la variable global
  return t;
}
test();
console.log("Valor de t:", t); // imprime 10

// ✅ 2. Evitar imprimir undefined en el ciclo
let years: Array<number> = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
console.log("Todos los años:");
for (let i = 0; i < years.length; i++) {
  console.log(years[i]);
}

// ✅ 3. Mostrar años mayores a 2020
console.log("Años mayores a 2020:");
for (let i in years) {
  if (years[i] > 2020) {
    console.log(years[i]);
  }
}

// ✅ 4. Mostrar años menores o iguales a 2019
console.log("Años menores o iguales a 2019:");
years.forEach(function(yrs) {
  if (yrs <= 2019) {
    console.log(yrs);
  }
});

// ✅ 5. Operaciones con parámetros
function sumar(a1: number, b1: number): number {
  return a1 + b1;
}

function restar(a1: number, b1: number): number {
  return a1 - b1;
}

function multiplicar(a1: number, b1: number): number {
  return a1 * b1;
}

console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(5, 3));
console.log("Multiplicación:", multiplicar(5, 3));

// ✅ 6. Mostrar nombres de cinco personas
function getNombre(nombre: string, apellido?: string): string {
  return apellido ? `${nombre} ${apellido}` : nombre;
}

console.log("Personas:");
console.log(getNombre("Ana", "García"));
console.log(getNombre("Luis", "Martínez"));
console.log(getNombre("Sofía", "López"));
console.log(getNombre("Carlos")); // sin apellido
console.log(getNombre("Elena", "Ramírez"));