export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    } else {
      for (let student of students) {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get _name() {
    return this._name;
  }
  set _name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }
  get _length() {
    return this._length;
  }
  set _length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }
  get _students() {
    return this._students;
  }
  set _students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    } else {
      for (let student of students) {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
    }
    this._students = students;
  }
}
