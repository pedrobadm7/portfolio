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
      'https://media.licdn.com/dms/image/v2/D4D2DAQHiniNwrYz7DQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1705444757703?e=1726272000&v=beta&t=husiUHpV94nI4HUeLXha1T_WYMM3VDtIYxIEm8cv8w4',
  },
  {
    name: 'Pitakeiros',
    description:
      'A fantasy game where you can compete with other people during the rounds of football championships, the best guesses win the prize!',
    image:
      'https://media.licdn.com/dms/image/v2/D4D2DAQGEf4cRaGMzVQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1704368788647?e=1726272000&v=beta&t=0FJrBq31BedCs8DnVjbq1LOH2RKE-XdpSvKWWnXzAF4',
  },
  {
    name: 'Waiter App',
    description:
      "The Waiter App is an application that allows customers of restaurants, snack bars and similar establishments to place orders quickly and conveniently, making the waiter's only job to take the order to the customer.",
    image:
      'https://media.licdn.com/dms/image/v2/D4D2DAQGOMvYoBIXy6w/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1704229359427?e=1726272000&v=beta&t=L9azRZLcU6tCi2mrye5miEwfRAbGOBRDCLRE59ZbB2U',
  },
] satisfies Projects[];
