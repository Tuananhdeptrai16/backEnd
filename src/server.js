require("dotenv").config();
const mysql = require("mysql2");
const connection = require("./config/database");
const express = require("express"); // comon node
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const fileUpload = require("express-fileupload");
//import moogo client
const { MongoClient } = require("mongodb");
// import express from express // es modules
const app = express(); // khai baos
const port = process.env.PORT; /// port
const hostname = process.env.HOST_NAME || 8888;
//config upload file
app.use(fileUpload());
//config view engine
configViewEngine(app);
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true }));
//test connection

(async () => {
  try {
    //Using moogoose
    // await connection();

    //Using Driver
    //Using moogoDB
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);

    //database name
    const dbName = process.env.DB_NAME;

    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("documents");

    app.listen(port, hostname, () => {
      console.log(`BackEnd zero app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>>>Error to connect to db", error);
  }
})();
//khai báo route
app.use("/", webRoutes);
app.use("/v1/api", apiRoutes);
