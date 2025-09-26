let isHidden = false;

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (shouldHide) => {
      const targetClass = "slack relative transition-colors duration-1000 rounded-md py-1.5 dark:bg-brown-950 -mx-1.5 bg-amber-50 px-2 pt-2";
      document.querySelectorAll("div").forEach(div => {
        if (div.className === targetClass) {
          div.style.display = shouldHide ? "none" : "";
        }
      });
    },
    args: [!isHidden]  // Toggle flag
  });

  isHidden = !isHidden;
});
