var enterMassage = prompt('Please enter this message (My <b>name</b> is <i>Alex</i>)');

var tagOpen = 0;
var tagClose = 0;
var tags = [];

while (true) {
  var foundTagOpen = enterMassage.indexOf('<', tagOpen);
  var foundTagClose = enterMassage.indexOf('>', tagClose);

  if (foundTagOpen == -1) break;

  tags.push(enterMassage.substring(foundTagOpen, foundTagClose + 1));

  tagOpen = ++foundTagOpen;
  tagClose = ++foundTagClose;
}

for (var item of tags) {
  enterMassage = enterMassage.replace(item, '');
}

alert(enterMassage);

console.log(enterMassage);

