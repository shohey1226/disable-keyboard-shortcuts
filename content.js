console.log('hoge');
console.log(command);
console.log(window.term);
console.log(document.getElementsByClassName('xterm-helper-textarea'));
var termTextarea = document.getElementsByClassName('xterm-helper-textarea')[0];
var event = {
  key: "n",
  ctrlKey: true,
  shiftKey: false,
  altKey: false,
  metaKey: false,
  repeat: false,
  isComposing: false,
  charCode: 0,
  keyCode: 78
};
var keyEvent = new KeyboardEvent('keydown', event); 
termTextarea.dispatchEvent(keyEvent);
