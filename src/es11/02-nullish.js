const anotherNumber = null;
const valiDate = anotherNumber ?? 5;
console.log(valiDate);

/// OR vs Nullish coalescing
const id = 0
const orId = id || "Sin id"
const nullishId = id ?? "Sin id"

console.log(orId) // "Sin id"
console.log(nullishId) // 0 