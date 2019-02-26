interface IPerson {
    name: string | number;
    age: number;
    skills: number[] | string[] | Array<string | number>;
    gender: 'M' | 'W';
    arms: ['R', 'L'];
    isHeSpy: unknown;
}
declare const person: IPerson;
interface gepard {
    fast: true;
}
interface pizza {
    good: true;
}
declare type Prefix = 'M';
declare function what(something: gepard): void;
declare let pp: number;
declare let xd: any;
declare function echo<T>(message: T): () => T;
declare function a(): void;
declare function a(input: number): number;
declare function a(input: string): string;
declare function dispatchAfter(value: {
    type: string;
    payload: string;
}): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare enum palette {
    red = "#ff0000",
    black = "#000",
    white = "#fff"
}
declare class Two {
    getName(): string;
}
declare class One {
    getText(name: string): string;
    getText(name: string, skill?: string): string;
}
declare const o: One;
interface IEchoString {
    (message: string | number): string | number;
}
declare const textEcho: IEchoString;
