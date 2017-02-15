'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', (req,res) => {
  	res.send('keep twining');
  });
  server.use(router);
};
