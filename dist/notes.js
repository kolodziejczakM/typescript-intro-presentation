var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const person = {
    name: 'Janusz',
    age: 65,
    skills: ['a', 'b', 'c', 6],
    gender: 'M',
    arms: ['R', 'L'],
    isHeSpy: 'r'
};
function what(something) {
    something.fast;
    console.log(something);
}
let pp = 5;
let xd = 5;
xd = person.isHeSpy;
function echo(message) {
    return () => message;
}
function a(input) {
    return input;
}
function dispatchAfter(value) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        console.log('target: ', target);
        console.log('propertyKey: ', propertyKey);
        descriptor.value = (...args) => {
            const outcome = originalMethod(...args);
            console.log('DISPATCHED: ', value);
            return outcome;
        };
    };
}
var palette;
(function (palette) {
    palette["red"] = "#ff0000";
    palette["black"] = "#000";
    palette["white"] = "#fff";
})(palette || (palette = {}));
class Two {
    getName() {
        console.log('call');
        return 'Anna';
    }
}
__decorate([
    dispatchAfter({ type: palette.red, payload: 'Me' })
], Two.prototype, "getName", null);
new Two().getName();
class One {
    getText(name, skill) {
        return name + skill;
    }
}
const o = new One();
o.getText('a');
echo('lala');
console.log(a());
console.log(a('HEAD'));
console.log(a(5));
const textEcho = message => {
    const m = message;
    const outcome = m + 2;
    return message;
};
//# sourceMappingURL=notes.js.map