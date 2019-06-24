interface SemiGroup<T> {
    append (a: T, b:T): T
};

interface Monoid<T> extends SemiGroup<T> {
    neutral: T;
}


interface LogEntry {
    timestamp: Date;
    text: string;
}

class Log implements CommutativMonoid<LogEntry> {
    buffer: LogEntry[]
    constructor () {
        this.buffer = []
    }
    append (a: LogEntry[], b: LogEntry[]) {
        this.buffer = this.buffer.concat(a).concat(b)
        return this.buffer;
    }
    neutral: []
    sortCriteria (a: LogEntry[], b: LogEntry[]) {
        if (a[0].timestamp > b[0].timestamp) {
            return 1;
        } else if(a[0].timestamp < b[0].timestamp) {
            return -1;
        }
        return 0;
    }
}