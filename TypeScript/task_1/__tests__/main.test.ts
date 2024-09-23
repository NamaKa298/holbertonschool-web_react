import { Teacher, Directors, printTeacher, StudentClass } from '../js/main';

describe('Teacher Interface', () => {
  it('should create a teacher object', () => {
    const teacher: Teacher = {
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

describe('Directors Interface', () => {
  it('should create a director object', () => {
    const director: Directors = {
      firstName: "John",
      lastName: "Doe",
      location: "London",
      fullTimeEmployee: true,
      numberOfReports: 17
    };
    expect(director.firstName).toBe("John");
    expect(director.lastName).toBe("Doe");
    expect(director.location).toBe("London");
    expect(director.fullTimeEmployee).toBe(true);
    expect(director.numberOfReports).toBe(17);
  });
});

describe('printTeacher Function', () => {
  it('should return the correct string', () => {
    expect(printTeacher("John", "Doe")).toBe("J. Doe");
  });
});

describe('StudentClass', () => {
  it('should create a student object and return correct values', () => {
    const student = new StudentClass("Jane", "Smith");
    expect(student.displayName()).toBe("Jane");
    expect(student.workOnHomework()).toBe("Currently working");
  });
});
