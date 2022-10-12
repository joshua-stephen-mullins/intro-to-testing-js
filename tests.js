// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
      expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return a string of "Hello, Jane!" when input is "Jane".', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return a string of "Hello, Alex!" when input is "Alex".', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return a string of "Hello, Pat!" when input is "Pat".', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return a string of "Hello, World!" when input is undefined.', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return a string of "Hello, World!" when input is the boolean value of true.', function() {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return a string of "Hello, World!" when input is the boolean value of false.', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it('should return a string of "Hello, World!" when input is null.', function() {
        expect(sayHello(null)).toBe("Hello, World!")
    });
    it('should return a string of "Hello, World!" when input is 23.', function() {
        expect(sayHello(23)).toBe("Hello, World!")
    });
    it('should return a string of "Hello, World!" when input is "23".', function() {
        expect(sayHello('23')).toBe("Hello, World!")
    });
});

// Unit tests for the isFive function
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isFive()).toBe( 'boolean');
    });
    it('should return true when passed 5', function() {
        expect(isFive(5)).toBe( true);
    });
    it('should return true when passed "5"', function() {
        expect(isFive("5")).toBe( true);
    });
});

// Unit tests for the isEven function
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isEven()).toBe( 'boolean');
    });
    it('should return true when passed 2', function() {
        expect(isEven(2)).toBe( true);
    });
    it('should return true when passed -4', function() {
        expect(isEven(-4)).toBe( true);
    });
    it('should return false when passed 3', function() {
        expect(isEven(3)).toBe( false);
    });
    it('should return false when passed "banana"', function() {
        expect(isEven("banana")).toBe( false);
    });
    it('should return true when passed "8"', function() {
        expect(isEven("8")).toBe( true);
    });
    it('should return false when passed Infinity', function() {
        expect(isEven(Infinity)).toBe( false);
    });
    it('should return false when passed a boolean input', function() {
        expect(isEven(false) || isEven(true)).toBe( false);
    });
    it('should return false when called without an argument', function() {
        expect(isEven()).toBe( false);
    });
});