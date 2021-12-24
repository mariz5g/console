import { console } from 'https://deno.land/x/console/mod.ts';

if(console.KeyInYN('Do you want this module? ')) {
  console.WriteLine('Installing now...');
} else {
  console.WriteLine('Searching another...');
}