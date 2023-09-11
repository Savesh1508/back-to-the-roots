const now = new Date();

const start = new Date(1000 * 60 * 60 * 24 * 365);

const date = new Date(2011, 0, 4, 12, 42, 12)

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

now.setFullYear(2055)
console.log(now);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());