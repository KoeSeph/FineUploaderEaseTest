var fineuploader = require('fineuploader');

// Traditional Storage
var storage = 'traditional';
var opts = {
   static: '/var/www/',
   uploads: '/uploads'
};

// S3 Storage - uncomment below to use an S3 storage backend instead.
// var storage = 's3';
// var opts = {
//     auth: {
//         server_public: '', // default is process.env.SERVER_PUBLIC_KEY
//         server_secret: '', // default is process.env.SERVER_SECRET_KEY
//        client_secret: ''  // default is process.env.CLIENT_SECRET_KEY
//    },
//    bucket: 'uploadbucket'
// };

var app = fineuploader(storage, opts);
app.listen('8000', function(){
    var startMessage = "start: " + argv.host + ":" + argv.port;
});