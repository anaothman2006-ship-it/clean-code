const x= function(z) {
    const w = " Hello"
    return w + z
}
console.log(x("Othman"))

const generateUserGreeting = function(name) {
    const greeting = "Hello"
    return greeting + name
}
console.log(generateUserGreeting("Othman"))

function extractTextWithinBrackets(text) {
  const bracketTextStart = text.indexOf("[") + 1;
  const bracketTextEnd = text.indexOf("]");
  return text.substring(bracketTextStart, bracketTextEnd);
}
console.log(extractTextWithinBrackets("[othman]"))


// كود يحتاج لتنظيف
function d(p) {
  // اضرب السعر في 1.2 لإضافة الضريبة
  const r = p * 1.2;
  return r;
}

console.log(d(100));

const TAX_RATE = 1.2
function taxCalculation(price) {
    const result = price * TAX_RATE;
    return result;
}