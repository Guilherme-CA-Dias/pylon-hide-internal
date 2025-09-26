# Hide Internal Pylon - Chrome Extension

A simple Chrome extension that allows you to hide specific div elements with a particular class string by clicking the extension icon.

## Features

- Toggle visibility of divs matching a specific class string
- One-click toggle functionality
- Works on any webpage
- Lightweight and fast

## Installation Instructions

### Method 1: Load as Unpacked Extension (Recommended for Development)

1. **Download or Clone the Extension**

   - Download all the extension files to your computer
   - Make sure you have these files:
     - `manifest.json`
     - `background.js`
     - `icon.png`

2. **Open Chrome Extensions Page**

   - Open Google Chrome
   - Navigate to `chrome://extensions/` in your address bar
   - Or go to Chrome Menu (three dots) → More Tools → Extensions

3. **Enable Developer Mode**

   - In the top-right corner of the Extensions page, toggle the "Developer mode" switch to ON
   - You should see additional buttons appear

4. **Load the Extension**

   - Click the "Load unpacked" button
   - Navigate to the folder containing your extension files
   - Select the folder and click "Select Folder" (Windows) or "Open" (Mac/Linux)

5. **Verify Installation**
   - The extension should now appear in your extensions list
   - You should see the extension icon in your Chrome toolbar
   - The extension is now ready to use!

### Method 2: Pack the Extension (For Distribution)

If you want to create a `.crx` file for easier distribution:

1. Follow steps 1-4 from Method 1
2. Click "Pack extension" button
3. Select the extension folder
4. Chrome will create a `.crx` file and a `.pem` key file
5. Share the `.crx` file with users (they can drag and drop it into Chrome)

## How to Use

1. **Navigate to any webpage** where you want to hide specific divs
2. **Click the extension icon** in your Chrome toolbar
3. **The extension will toggle** the visibility of divs matching the target class
4. **Click again** to show the divs again

## Troubleshooting

### Extension Not Appearing

- Make sure you enabled Developer mode
- Check that all required files are in the same folder
- Try refreshing the Extensions page

### Extension Not Working

- Make sure you're on a webpage (not chrome:// pages)
- Check the browser console for any errors
- Verify the extension is enabled in the Extensions page

### Permission Issues

- The extension requires "scripting" and "activeTab" permissions
- These are automatically granted when you load the extension

## File Structure

```
pylon-hide-internal/
├── manifest.json      # Extension configuration
├── background.js      # Main extension logic
├── icon.png          # Extension icon
└── README.md         # This file
```

## Technical Details

- **Manifest Version**: 3 (latest)
- **Permissions**: scripting, activeTab
- **Target Class**: `slack relative transition-colors duration-1000 rounded-md py-1.5 dark:bg-brown-950 -mx-1.5 bg-amber-50 px-2 pt-2`

## Uninstalling

To remove the extension:

1. Go to `chrome://extensions/`
2. Find "Hide Internal Pylon" in the list
3. Click the "Remove" button
4. Confirm removal
