//console.log(command);
//console.log(document.getElementsByClassName('xterm-helper-textarea'));
var termTextarea = document.getElementsByClassName("xterm-helper-textarea")[0];
var event = null;

switch (command) {
  case "ctrl-n":
    event = {
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
    break;
  case "ctrl-t":
    event = {
      key: "t",
      ctrlKey: true,
      shiftKey: false,
      altKey: false,
      metaKey: false,
      repeat: false,
      isComposing: false,
      charCode: 0,
      keyCode: 84
    };
    break;
}

if (event) {
  var keyEvent = new KeyboardEvent("keydown", event);
  termTextarea.dispatchEvent(keyEvent);
}
