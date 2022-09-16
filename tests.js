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
    it("should return false when isEven(true) or is executed", function () {
        expect(isEven(true)).toBe(false);
    })
    it("should return false when isEven(false) is executed", function () {
        expect(isEven(false)).toBe(false);
    })
    it("should return false when isEven() is executed", function () {
        expect(isEven()).toBe(false);
    })
});


describe("isVowel", function() {
    it("isVowel always returns a boolean", function () {
        expect(typeof isVowel()).toBe("boolean");
    })
    it("isVowel('a') returns true", function () {
        expect(isVowel('a')).toBe(true);
    })
    it("isVowel('A') returns true", function () {
        expect(isVowel('A')).toBe(true);
    })
    it("isVowel('y') returns false", function () {
        expect(isVowel('y')).toBe(false);
    })
    it("isVowel('4') returns false", function () {
        expect(isVowel('4')).toBe(false);
    })
    it("isVowel(true) returns false", function () {
        expect(isVowel(true)).toBe(false);
    })
    it("isVowel(false) returns false", function () {
        expect(isVowel(false)).toBe(false);
    })
    it("isVowel('banana') returns false", function () {
        expect(isVowel('banana')).toBe(false);
    })
    it("isVowel() returns false", function () {
        expect(isVowel('4')).toBe(false);
    })
});


// add(-3, -9) returns -12
// add("5", 6) returns 11
// add("-4", "10") returns 6
// add("banana", "split") returns NaN
// add(2, "apples") returns NaN
// add() returns NaN
describe("add", function() {
    it("add(2, 3) returns 5", function () {
        expect(add(2, 3)).toBe(5);
    })
});