const dotenv = require('dotenv');

dotenv.config();
console.info('Running NodeJS serverless framework: ', process.pid);
console.info('On Port: ', process.env.PORT || '-');
console.info('Mode: ', process.env.NODE_ENV || '-');
console.info('Arguments values: ', process.argv);

// Example of application exit
if (Math.random() > 0.5) {
    console.info('Running... Ok');
    while (true) {}

} else {
    console.warn('Emergency app exit running...');
    process.exit();
}
