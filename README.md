# Web Scraping with Node.js

This project demonstrates web scraping using Node.js to extract product information from a web page and export it to an Excel file.

## Overview

This Node.js application fetches HTML data from a specified URL, parses it using Cheerio, extracts product details such as name, price, rating, and reviews, and saves them into an Excel file.

## Prerequisites

Before running the script, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. Clone this repository:

git clone <repository-url>

css
Copy code

2. Navigate to the project directory:

cd web-scraping-nodejs

markdown
Copy code

3. Install dependencies:

npm install

markdown
Copy code

## Usage

1. Modify the `pageUrl` variable in `index.js` to the URL of the web page you want to scrape.

2. Run the script:

node index.js

markdown
Copy code

3. After execution, the extracted product information will be saved in an Excel file named `products.xlsx`.

## Packages Used

- [axios](https://www.npmjs.com/package/axios): For making HTTP requests.
- [cheerio](https://www.npmjs.com/package/cheerio): For parsing HTML.
- [xlsx](https://www.npmjs.com/package/xlsx): For Excel file manipulation.
- [fs](https://nodejs.org/api/fs.html): For file operations.

## License

This project is licensed under the MIT License.
