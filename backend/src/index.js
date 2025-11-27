const express = require("express");

const startServer = () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.listen(3000, () => {
    console.log(`server has started on 3000 `);
  });
};
startServer();
