let args = process.argv.slice(2);
const compareNumbers = function(a, b) {
  return a - b;
};
args = args.sort(compareNumbers);
let timer = 0;

for (let index = 0; index < args.length; index++) {
  timer = Number(args[index]) * 1000;
  
  if (Number(args[index]) > 0 && Number(args[index]) !== NaN) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer);
  }
}





