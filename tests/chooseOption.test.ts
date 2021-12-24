import { console } from 'https://deno.land/x/console/mod.ts';

const animals: string[] = ['Horse', 'Rooster', 'Cow', 'Dog', 'Hamster'];
const select: number = console.ChooseOption(animals, 'Which animal to choose?');

console.WriteLine(`You choose ${animals[select]}`);