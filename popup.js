
function setCursor(event){
      let cursorChoice = parseFloat(event.target.value);
      chrome.storage.sync.set({cursor: cursorChoice});
      window.close();
    }
    