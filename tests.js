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

