const express = require("express");
const routerAPI = express.Router();
const {
  getUsersApi,
  postCreateNewUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  uploadSingleFile,
  uploadMultipleFile,
} = require("../controllers/apiController");

const {
  getCustomer,
  putCustomer,
  deleteACustomer,
  postCreateCustomer,
  postCreateArrayCustomer,
} = require("../controllers/customerController");
routerAPI.get("/users", getUsersApi);
routerAPI.post("/users", postCreateNewUserAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUserAPI);
routerAPI.post("/file", uploadSingleFile);
routerAPI.post("/files", uploadMultipleFile);
routerAPI.post("/customer", postCreateCustomer);
routerAPI.post("/customer-many", postCreateArrayCustomer);
routerAPI.get("/customer", getCustomer);
routerAPI.put("/customer", putCustomer);
routerAPI.delete("/customer", deleteACustomer);

module.exports = routerAPI;
