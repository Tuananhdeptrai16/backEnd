const Users = require("../models/user");
const { uploadFileSingle } = require("../services/fileService");
const { uploadFileMutiple } = require("../services/fileService");
const getUsersApi = async (req, res) => {
  let results = await Users.find({});
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const postCreateNewUserAPI = async (req, res) => {
  let { email, name, city } = req.body;
  let user = await Users.create({
    email,
    name,
    city,
  });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const putUpdateUserAPI = async (req, res) => {
  let { userId, email, name, city } = req.body;
  let user = await Users.updateOne({ _id: userId }, { name, email, city });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const deleteUserAPI = async (req, res) => {
  const userId = req.body.userId;
  let result = await Users.deleteOne({ _id: userId });
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};
const uploadSingleFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let result = await uploadFileSingle(req.files.image);
  console.log(">>> check result", result);
  res.send("Ok single file ");
};
const uploadMultipleFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  if (Array.isArray(req.files.image)) {
    let result = await uploadFileMutiple(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  } else {
    return await uploadSingleFile(req, res);
  }
};
module.exports = {
  getUsersApi,
  postCreateNewUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  uploadSingleFile,
  uploadMultipleFile,
};
