const DataExtractor = require('./data-extractor');

// Sample text with various patterns to test
const testString = `
Welcome to our online store! Shop now at https://mystore.com/shop
Contact our support team at support@mystore.com or customercare@shop.co.uk
Need help? Call us at (555) 123-4567 or 888.777.6666

Product Details:
<div class="product">
    <h1>Latest Gadget</h1>
    <img src="gadget.jpg" alt="Cool Gadget">
</div>

Price: $299.99
Special Deal: $1,499.99
Premium Version: $2,999.00

Store Hours: 9:30 AM to 18:30 (24-hour format)
Night Support: 8:45 PM to 23:45

Follow us on social:
#TechDeals #LatestGadgets #ShopNow

Payment accepted:
Credit Card: 4111-1111-1111-1111
Alternative Card: 5555 6666 7777 8888

Visit our other sites:
https://blog.mystore.com/news
http://support.mystore.net/help

Emergency Contact: 123-456-7890
International: +1-777-888-9999
`;

// Create an instance of DataExtractor
const extractor = new DataExtractor(testString);

// Test each extraction method
const testExtraction = (methodName, title) => {
    const results = extractor[methodName]();
    console.log(`\n${title}:`);
    console.log('-'.repeat(title.length));
    results.forEach(item => console.log(item));
};

// Run tests
testExtraction('extractEmails', 'Extracted Emails');
testExtraction('extractUrls', 'Extracted URLs');
testExtraction('extractPhoneNumbers', 'Extracted Phone Numbers');
testExtraction('extractCreditCards', 'Extracted Credit Card Numbers');
testExtraction('extractTime', 'Extracted Time Formats');
testExtraction('extractHtmlTags', 'Extracted HTML Tags');
testExtraction('extractHashtags', 'Extracted Hashtags');
testExtraction('extractCurrency', 'Extracted Currency Amounts');
