"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('Teacher Interface', function () {
    it('should create a teacher object', function () {
        var teacher = {
            firstName: "John",
            lastName: "Doe",
            fullTimeEmployee: false,
            location: "London",
            contract: false
        };
        expect(teacher.firstName).toBe("John");
        expect(teacher.fullTimeEmployee).toBe(false);
        expect(teacher.lastName).toBe("Doe");
        expect(teacher.location).toBe("London");
        expect(teacher.contract).toBe(false);
    });
});
