import fincheck from '../assets/images/fincheck.jpeg';
import pitakeiros from '../assets/images/pitakeiros.jpeg';
import waiterApp from '../assets/images/waiterApp.jpeg';

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
    image: fincheck,
  },
  {
    name: 'Pitakeiros',
    description:
      'A fantasy game where you can compete with other people during the rounds of football championships, the best guesses win the prize!',
    image: pitakeiros,
  },
  {
    name: 'Waiter App',
    description:
      "The Waiter App is an application that allows customers of restaurants, snack bars and similar establishments to place orders quickly and conveniently, making the waiter's only job to take the order to the customer.",
    image: waiterApp,
  },
] satisfies Projects[];
