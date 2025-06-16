String.prototype.dogSpeak = function () {
  console.log(this.toString() + ' Woof!');
};

let s = 'We like to learn';
s.dogSpeak(); // Console output: We like to learn Woof!

'Dogs are smart'.dogSpeak(); // Console output: Dogs are smart Woof!
