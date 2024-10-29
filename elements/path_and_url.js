const path = require('path');
const fullPath = path.resolve(__dirname, '..', 'elements', 'path_and_url.js')

console.info('Current dir [__dirname]:', __dirname);
console.info('Current file [__filename]:', __filename);
console.info('Split path:', path.join(__dirname, '..', '..'));
console.info('Parse route:', path.parse(fullPath));
console.info('Os separator:', path.sep);
console.info('Is absolute path:', path.isAbsolute('first/second'));
console.info('Filename:', path.basename(fullPath));
console.info('Extension:', path.extname(fullPath));

const siteURL = 'https://app:8080/users?id=123&name=John&pid=[1,2,3]';
const urlDetails = new URL(siteURL);

console.info('Url:', siteURL);
console.info('Parse url:', urlDetails);
