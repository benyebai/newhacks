whitelist = ["https://www.youtube.com/"]


chrome.tabs.onUpdated.addListener(function(activeInfo) {

  chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    let url = tabs[0].url;

    console.log("tab");
    console.log(url.toString());
    console.log("aftertab");

    if (whitelist.includes(url.toString()) == false) {
      console.log("INCLUDED");

        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {

      });


  } else {
      console.log("Didn't work");
  }
 

  });
});