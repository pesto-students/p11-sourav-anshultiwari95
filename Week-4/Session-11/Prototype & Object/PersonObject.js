const person = {};

Object.defineProperties(person, {
    name: {
        value: 'Anshul',
        writable: false,
        enumerable: true
    },
    age: {
        writable: true,
        enumerable: true
    },
    email: {
        value: 'anshultiwari95@gmail.com',
        writable: false,
        enumerable: true
    }
});

Object.defineProperty(person, 'getAge', {
    value: function () {
        return this.age;
    },
    enumerable: true
});

Object.defineProperty(person, 'setAge', {
    value: function (newAge) {
        this.age = newAge;
    },
    enumerable: true
});
