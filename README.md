# Auto Scroll Extension

The **Auto Scroll Extension** is a Chrome extension that automatically scrolls a webpage up and down, reversing direction when it reaches the top or bottom. It features simple controls to start and stop scrolling on the active tab.

## Features
- 📜 **Automatic Scrolling**: Scrolls the page automatically up and down.
- 🔄 **Direction Reversal**: Automatically reverses direction when the page reaches the top or bottom.
- 🖱️ **Easy Controls**: Start and stop scrolling with a single click.
- 🗂️ **Tab-Specific**: Only affects the current tab, allowing you to browse other tabs uninterrupted.

## Installation
1. **Clone or Download** this repository to your local machine.
2. Open **Chrome** and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** by toggling the switch in the top-right corner.
4. Click on **Load unpacked** and select the folder containing the extension files.

## Usage
1. After installing, locate the **Auto Scroll Extension** icon in the Chrome toolbar.
2. Click the icon to open the extension popup.
3. In the popup:
   - Click **Start** to begin auto-scrolling the current tab.
   - Click **Stop** to halt the scrolling.
4. The scrolling will automatically stop if you switch to another tab.

## Troubleshooting
- **Icon Not Showing**: Ensure that the icon file paths in `manifest.json` are correct and reload the extension.
- **Permissions Error**: Make sure the required permissions were granted during installation.
- **Extension Not Working**: Reload the extension from `chrome://extensions/` and try clearing your browser cache.

## Customization
You can adjust the scrolling speed and interval in the `popup.js` file:

```javascript
// Adjust scroll speed (2 pixels per interval)
window.scrollBy(0, 2 * window.scrollDirection);

// Adjust interval frequency (10 ms)
setInterval(..., 10);
