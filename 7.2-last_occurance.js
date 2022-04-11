const string = "The more you know, the more you know that you don't know";
let position = 0;

for (let i = string.indexOf('you', position); i > -1; i = string.indexOf('you', position)) {
    position = i + 1;
}
console.log(position - 1);
