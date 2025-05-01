export function addTwoNumbers(a, b) {
    return a + b;
}

export function subtractTwoNumbers(a, b) {
    return a - b;
}

export function multiplyTwoNumbers(a, b) {
    return a * b;
}

export function divideTwoNumbers(a, b) {
    if (b === 0) {
        throw new Error("Nolga bo‘lish mumkin emas");
    }
    return a / b;
}

export function degreeNumbers(a, b) {
    return Math.pow(a, b);
}