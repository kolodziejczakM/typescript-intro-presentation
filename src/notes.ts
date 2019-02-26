// 1. Interface
// 2. Types inference
// 3. Generic functions
// 4. Typing functions: inline, interfaces
// 5. as syntax
// 6. function overloading, optional params

interface IPerson {
    name: string | number;
    age: number;
    skills: number[] | string[] | Array<string | number>; // generic type,
    gender: 'M' | 'W';
    arms: ['R', 'L'];
    isHeSpy: unknown;
    white: '#fff';
}

const person: IPerson = {
    name: 'Janusz',
    age: 65,
    skills: ['a', 'b', 'c', 6],
    gender: 'M',
    arms: ['R', 'L'],
    isHeSpy: 'r',
    white: '#fff'
};

interface gepard {
    fast: true;
}

interface pizza {
    good: true;
}

type Prefix = 'M';
// const manPrefix: Prefix = 'S';

function what(something: gepard) {
    something.fast;
    console.log(something);
}

let pp = 5;

let xd: any = 5;
xd = person.isHeSpy;

/**
 * Generic
 * @param message
 */
function echo<T>(message: T): () => T {
    return () => message;
}

function a(): void;
function a(input: number): number;
function a(input: string): string;
function a(input?: string | number): string | number | void {
    return input;
}

function dispatchAfter(value: { type: string; payload: string }) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        console.log('target: ', target);
        console.log('propertyKey: ', propertyKey);

        descriptor.value = (...args: any[]) => {
            // console.log('before call');
            const outcome = originalMethod(...args);
            console.log('DISPATCHED: ', value);

            return outcome;
        };
    };
}

// action types:
// const FETCH_USERS = 'FETCH_USERS';

enum FetchUsers {
    START = 'FETCH_USERS',
    SUCCESS = 'FETCH_USERS_SUCCESS',
    FAILURE = 'FETCH_USERS_FAILURE'
}
// FetchUsers.START = 'XD';

type Person = 'M' | 'W';
type White = '#fff';

function omg(action: any) {
    switch(action.type) {
        case FetchUsers.START:
            return 'HURRA!';
    }
    
    return action;
}

omg({ type: 'FETCH_USERS' });

class Two {
    @dispatchAfter({ type: FetchUsers.START, payload: 'Me' })
    getName() {
        console.log('call');
        return 'Anna';
    }
}

new Two().getName();

class One {
    public getText(name: string): string;
    public getText(name: string, skill?: string): string;
    public getText(name: string, skill?: string): string {
        return name + skill;
    }
}

const o = new One();
o.getText('a');

echo<string>('lala');

console.log(a());
console.log(a('HEAD'));
console.log(a(5));

interface IEchoString {
    (message: string | number): string | number;
}

const textEcho: IEchoString = message => {
    const m = message as number;
    const outcome = m + 2;
    return message;
};
