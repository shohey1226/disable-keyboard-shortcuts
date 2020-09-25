// https://stackoverflow.com/questions/17567624/pass-a-parameter-to-a-content-script-injected-using-chrome-tabs-executescript 
chrome.commands.onCommand.addListener(function(command) {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    var activeTabUrl = activeTab.url; 

    if(activeTabUrl.match(/https:\/\/.*\.wazaterm\.com/)){
      chrome.tabs.executeScript(null, {
        code: `var command = "${command}"`
      }, function(){
        chrome.tabs.executeScript(
          null,
          {file: "content.js"}
        );
      });
    }else if(activeTabUrl.match(/chrome-untrusted:\/\/terminal\/html\/terminal\.html/)){
        // we should simulate ctrl-n and ctrl-t for terminal app in chromeos but we don't know how
    }else{
      if(command === "ctrl-n"){
        chrome.windows.create();
      } else if(command === "ctrl-t"){
        chrome.tabs.create({});
      }
    }

  });
});
