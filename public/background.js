blacklist = ["https://stackoverflow.com/questions/9106519/port-error-could-not-establish-connection-receiving-end-does-not-exist-in-chr"]

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    console.log("tab");
    console.log(url.toString());
    console.log("aftertab");

    if (blacklist.includes(url)) {
      alert("BLACKLISTED");
  } else {
      console.log("Didn't work");
  }
    chrome.tabs.sendMessage(tabs[0].id, {greeting: url}, function(response) {


    });

  });


});