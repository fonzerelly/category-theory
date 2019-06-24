interface Either <T,U> {
    getValue (): T|U
}

class Left implements Either <number, string> {
    constructor (private value: number) {}
    getValue() {
        return this.value;
    }
}

class Right implements Either <number, string> {
    constructor (private value: string) {}
    getValue() {
        return this.value;
    }
}

function division (a: number, b: number): Either<number, string> {
    if (b === 0) {
        return new Right('Division by zero is invalid!');
    }
    return new Left(a / b);
}

console.log(division(12, 3)) //Left { value: 4 }

console.log(division(12, 0)) //Right { value: 'Division by zero is invalid!' }