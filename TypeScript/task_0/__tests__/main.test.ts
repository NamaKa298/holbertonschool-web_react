import { Student } from '../js/main';

describe('Student Interface', () => {
  it('should create a student object', () => {
    const student: Student = {
      firstName: "John",
      lastName: "Doe",
      age: 20,
      location: "New York"
    };
    expect(student.firstName).toBe("John");
    expect(student.lastName).toBe("Doe");
    expect(student.age).toBe(20);
    expect(student.location).toBe("New York");
  });
});

