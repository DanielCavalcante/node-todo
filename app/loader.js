const app = require('./config/server');
require('./config/db');
require('./routes/todo.routes')(app);