
interface Equality <T> {
    equals (a: T, b: T): boolean
}

const assertEqual = <T>( e: Equality<T>, a: T, b: T) => {
    if (! e.equals(a, b)) {
        throw new Error ('Assertion failed!');
    }
    return e.equals(a, b);
};


interface SemiGroup<T> {
    append (a: T, b:T): T
};

interface Monoid<T> extends SemiGroup<T> {
    neutral: T;
}

class Sum implements Monoid<number>, Equality<number>  {
    append(a: number, b: number) {
        return a + b
    }
    equals(a: number, b: number) {
        return a === b;
    }
    neutral: number = 0
}

const sum = new Sum();
console.log(sum.append(3, 4))
assertEqual(
    sum,
    sum.append(5, sum.neutral), 
    5
);

class Mult implements Monoid<number>, Equality<number> {
    append(a: number, b: number ) {
        return a * b
    }
    neutral: number = 1;
    equals(a, b) {
        return a === b
    }
}

const mult = new Mult();
console.log(mult.append(3, 4))
assertEqual(
    mult,
    mult.append(5, mult.neutral), 
    5
);

class NumberList implements Monoid<Array<number>> {
    append(a: Array<number>, b: Array<number>) {
        return a.concat(b);
    }

    neutral: Array<number> = [];
    equals (a, b) {
        return a.map((value, index) => {
            return value === b[index]
        })
    }
}

const list = new NumberList();
console.log(list.append([1,2,3], [4,5,6]))
assertEqual(
    list,
    list.append([1,2,3], list.neutral),
    [1,2,3]
)


const sumOfList = [1,2,3,4,5].reduce(sum.append, sum.neutral);
console.log(sumOfList)

const factorialOf5 = [1,2,3,4,5].reduce(mult.append, mult.neutral);
console.log(factorialOf5)

console.log('Monoids on the fly')

const keyValuePairs: [string, number][] = [['a', 1], ['b', 2]];
const object = keyValuePairs.reduce((obj, pair) => {
    obj[pair[0]] = pair[1]
    return obj;
}, {});
console.log(object);