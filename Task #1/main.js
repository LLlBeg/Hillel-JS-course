var list = prompt('Please enter the name (Alex, Vasya, Petya, Ann, Oleg)').split(', ');

var i = 0;

for (var item of list) {
  i++;
  console.log(`<li>${i} ${item}</li>`);
}