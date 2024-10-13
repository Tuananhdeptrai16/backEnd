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
  deleteArrayCustomer,
} = require("../controllers/customerController");
const {
  postProject,
  getAllProject,
  putProject,
  dProject,
} = require("../controllers/projectController");
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
routerAPI.delete("/customer-many", deleteArrayCustomer);
//post project
routerAPI.post("/projects", postProject);
routerAPI.get("/projects", getAllProject);
routerAPI.put("/projects", putProject);
routerAPI.delete("/projects", dProject);

routerAPI.get("/info", (req, res) => {
  return res.status(200).json({
    data: req.query,
  });
});
routerAPI.get("/info/:tuananh/:hanoi", (req, res) => {
  console.log("Check reqbody", req.params);
  return res.status(200).json({
    data: req.query,
  });
});
module.exports = routerAPI;
