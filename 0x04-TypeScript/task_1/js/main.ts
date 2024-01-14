interface Teacher = {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location?: string;
  contract: string;
  [key: string]: unknown;
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
