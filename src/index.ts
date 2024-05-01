export {};
// const todoRoute = require('./router/todoController');
const listRoute = require('./router/ListRoute');
let express = require('express');
const app = express();
app.use(express.json());

// app.use('/todos', todoRoute);
app.use('/Lists', listRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
