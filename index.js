const axios = require("axios"); // Importing Axios for making HTTP requests
const cheerio = require("cheerio"); // Importing Cheerio for parsing HTML
const xlsx = require("xlsx"); // Importing XLSX for Excel file manipulation
const fs = require("fs"); // Importing FileSystem for file operations

// Setting the page URL to scrape
const pageUrl =
  "https://www.fnp.com/flowers/mothers-day-lp?promo=desk_hp_md_row_pos_1";

const headers = {
  "content-type": "text/html",
};

// Function to fetch web page data and save it to a file
const getWebPageData = async (url) => {
  try {
    const response = await axios.get(url, { headers });
    const strData = response.data;
    fs.writeFileSync("webpagedata.txt", strData); // Save web page data to a file
  } catch (err) {
    console.log("ERROR_OCCURED", err);
  }
};

// Function to read data from the saved file
const getDataFromFile = () => {
  return fs.readFileSync("webpagedata.txt", { encoding: "utf-8" });
};

const pageHtmlString = getDataFromFile(); // Load HTML data from file

const $ = cheerio.load(pageHtmlString); // Load HTML data into Cheerio

// Create a worksheet with headers
const worksheet = xlsx.utils.aoa_to_sheet([
  ["Product Name", "Price", "Rating", "Reviews"],
]);

// Extracting data from the nested div
$(".MuiGrid-root.products").each((index, element) => {
  // Extract product details
  const productName = $(element)
    .find(".product-card_product-title__32LFp")
    .text()
    .trim();
  const productPrice = $(element)
    .find(
      '.product-card_product-price-info-container__E9rQf span[itemprop="price"]'
    )
    .text()
    .trim();
  const productRating = $(element)
    .find(".product-card_rating-sec__34VZH")
    .text()
    .trim();
  const productReviews = $(element)
    .find(".product-card_product-review-info__2-RtV")
    .text()
    .trim();

  // Add product data to the worksheet
  xlsx.utils.sheet_add_aoa(
    worksheet,
    [[productName, productPrice, productRating, productReviews]],
    { origin: -1 }
  );
});

// Create a new workbook
const workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, "Products");

// Write the workbook to a file
xlsx.writeFile(workbook, "products.xlsx");

// Display extracted product data
$(".MuiGrid-root.products").each((index, element) => {
  const productName = $(element)
    .find(".product-card_product-title__32LFp")
    .text()
    .trim();
  const productPrice = $(element)
    .find(
      '.product-card_product-price-info-container__E9rQf span[itemprop="price"]'
    )
    .text()
    .trim();
  const productRating = $(element)
    .find(".product-card_rating-sec__34VZH")
    .text()
    .trim();
  const productReviews = $(element)
    .find(".product-card_product-review-info__2-RtV")
    .text()
    .trim();

  console.log("Product Name:", productName);
  console.log("Product Price:", productPrice);
  console.log("Product Rating:", productRating);
  console.log("Product Reviews:", productReviews);
});
