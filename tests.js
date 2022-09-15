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


describe("sayHello", function(){
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    })
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
    it('should return "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })
    it('should return "Hello, World!" when name is undefined', function() {
        expect(sayHello()).toBe("Hello, World!");
    })
    it('should return "Hello, World!" when name is the boolean true', function() {
        expect(sayHello(true)).toBe("Hello, World!")
    })
    it('should return "Hello, World!" when name is the boolean false', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    })
});

describe("isFive", function() {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function");
    })
    it("should return a boolean", function () {
        expect(typeof isFive()).toBe("boolean");
    })
    it("should return true when passed 5", function () {
        expect(isFive(5)).toBe(true);
    })
    it("should return true when passed '5'", function () {
        expect(isFive('5')).toBe(true);
    })
});


describe("isEven", function() {
    it("should return a boolean", function () {
        expect(typeof isEven()).toBe("boolean");
    })
    it("should return true when isEven(2) is executed", function () {
        expect(isEven(2)).toBe(true);
    })
    it("should return true when isEven(-4) is executed", function () {
        expect(isEven(-4)).toBe(true);
    })
    it("should return false when isEven(3) is executed", function () {
        expect(isEven(3)).toBe(false);
    })
    it("should return false when isEven('banana'') is executed", function () {
        expect(isEven("banana")).toBe(false);
    })
    it("should return true when isEven('8') is executed", function () {
        expect(isEven("8")).toBe(true);
    })
    it("should return false when isEven(Infinity) is executed", function () {
        expect(isEven(Infinity)).toBe(false);
    })
    it("should return false when isEven(true) or isEven(false) is executed", function () {
        expect(isEven(Infinity)).toBe(false);
    })
    it("should return false when isEven() is executed", function () {
        expect(isEven(Infinity)).toBe(false);
    })
});