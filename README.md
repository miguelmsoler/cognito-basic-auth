# My Chrome Extension

## Description
This Chrome extension is designed to enhance the user experience when interacting with AWS Cognito. It automatically detects AWS Cognito app client pages and provides additional functionalities such as calculating and displaying the `encodedAuth` in base64, simplifying the management of basic authentication.

## Features
- Automatically detects the configuration pages of AWS Cognito app clients.
- Calculates and displays the authorization value in base64 (`Client ID:Client Secret`).
- Allows easy copying of the encoded value to the clipboard.

## Installation
1. Download the extension code.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable Developer Mode at the top right.
4. Click on "Load unpacked" and select the folder where the extension code is located.

## Usage
Navigate to any app client page within AWS Cognito. If the extension detects a `Client ID` and `Client Secret`, it will automatically calculate the `encodedAuth` and display a new entry on the page with the value and a button to copy it to the clipboard.

## Contributing
Contributions are welcome. If you have improvements or corrections, please open an issue or a pull request.

## License
[MIT](https://opensource.org/licenses/MIT)
