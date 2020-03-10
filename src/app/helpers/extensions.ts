// interface Array<T> {
//     first(predicate?: ($: T) => boolean): T;
//     any(predicate?: ($: T) => boolean): boolean;
//     any(predicate: (x: number) => void): boolean;
//     popRandom(): T;
// }

// Array.prototype.first = function (predicate?) {
//     if (!predicate) {
//         return this[0];
//     }

//     return this.filter(predicate).first();
// }

// Array.prototype.any = function (predicate?) {
//     if (!predicate) {
//         return this.length > 0;
//     }

//     return this.filter(predicate).length > 0;
// }

// Object.defineProperty(Array.prototype, 'popRandom', {
//     value: function() {  }
// });

