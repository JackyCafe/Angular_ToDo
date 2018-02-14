var connect = require('connect'),
serverStatic = require('serve-static');
var app = connect();
app.use(serverStatic("angularJS"));
app.listen(5000);

