// https://stackoverflow.com/questions/17567624/pass-a-parameter-to-a-content-script-injected-using-chrome-tabs-executescript 
chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.executeScript(null, {
    code: `var command = "${command}"`
  }, function(){
    chrome.tabs.executeScript(
      null,
      {file: "content.js"}
    );
  });
});
