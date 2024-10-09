interface Projects {
  name: string;
  description: string;
  image: string;
}

export const projects = [
  {
    name: 'Fincheck',
    description:
      'Fincheck is a financial control application, allowing you to register bank accounts and record expenses and income in a simple way.',
    image:
      'https://media.licdn.com/dms/image/v2/D4D2DAQHiniNwrYz7DQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1705444757703?e=1729098000&v=beta&t=L1ROCByHNQ6Qxqvp24k-vaY_3uN1ka05c0nXbEtzpog',
  },
  {
    name: 'Pitakeiros',
    description:
      'A fantasy game where you can compete with other people during the rounds of football championships, the best guesses win the prize!',
    image:
      'https://media.licdn.com/dms/image/v2/D4D2DAQGEf4cRaGMzVQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704368788647?e=1729098000&v=beta&t=-vqWMiBoTPWtgdjksaofbR6P-sVLqnd0NA3HcfEq2UQ',
  },
  {
    name: 'Waiter App',
    description:
      "The Waiter App is an application that allows customers of restaurants, snack bars and similar establishments to place orders quickly and conveniently, making the waiter's only job to take the order to the customer.",
    image:
      'https://media.licdn.com/dms/image/v2/D4D2DAQGOMvYoBIXy6w/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1704229359427?e=1729098000&v=beta&t=qpIN1-30Ei7Pb3i-Kxdsi0A5rFkSBkCJ6wORYyAt7Kg',
  },
] satisfies Projects[];
