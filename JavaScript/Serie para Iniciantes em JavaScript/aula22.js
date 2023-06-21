// Datas

const agora = new Date();
console.log(agora);

const ahora = new Date(2020, 8, 1, 12, 30, 12);
console.log(ahora);

console.log(new Date(2050, 6, 9));

// Setando valores
ahora.setFullYear(2000);
ahora.setMonth(5);
ahora.setHours(12,20);

console.log(ahora);

// Obter o dia, mes, ano, hora, minuto, segundo e milisegundo

const d = agora.getDate();
const m = agora.getMonth();
const a = agora.getFullYear();

console.log(`${d}/${m + 1}/${a}`);
