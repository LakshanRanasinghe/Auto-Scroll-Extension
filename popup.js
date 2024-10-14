
function startAutoScroll() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab && activeTab.id) {
        chrome.scripting.executeScript({
          target: {tabId: activeTab.id},
          func: () => {
    
            if (window.autoScrollInterval) return;
  
            window.scrollDirection = 1; 
            window.autoScrollInterval = setInterval(() => {
              window.scrollBy(0, 2 * window.scrollDirection);
  
              if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                window.scrollDirection = -1; 
              }
              if (window.scrollY === 0) {
                window.scrollDirection = 1; 
              }
            }, 10);
          }
        });
      }
    });
  }
  
  function stopAutoScroll() {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab && activeTab.id) {
        chrome.scripting.executeScript({
          target: {tabId: activeTab.id},
          func: () => {
            clearInterval(window.autoScrollInterval);
            delete window.autoScrollInterval;
          }
        });
      }
    });
  }
  
  document.getElementById('startScroll').addEventListener('click', startAutoScroll);
  document.getElementById('stopScroll').addEventListener('click', stopAutoScroll);
  