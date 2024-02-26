process.stdin.setEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', function() {
  const input = process.stdin.read();
  console.log('Your name is: ${input}');
  console.log('This important software is now closing');
});
