var server = require('./express-server');

server.app.listen(server.port);
console.log("listening on port", server.port);
