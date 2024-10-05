const { uploadFileSingle } = require("../services/fileService");
const {
  createCustomerService,
  createCustomerManyService,
  getCustomerService,
  updateCustomerService,
  deleteCustomerService,
} = require("../services/customer");
module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let imageUrl = "";
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    } else {
      let result = await uploadFileSingle(req.files.image);
      imageUrl = result.path;
    }
    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageUrl,
    };
    let customer = await createCustomerService(customerData);
    return res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
  postCreateArrayCustomer: async (req, res) => {
    console.log(">>.check req.body.customer", req.body.customer);

    let customerMany = await createCustomerManyService(req.body.customer);
    return res.status(200).json({
      EC: 0,
      data: customerMany,
    });
  },
  getCustomer: async (req, res) => {
    let results = await getCustomerService();
    return res.status(200).json({
      EC: 0,
      data: results,
    });
  },
  putCustomer: async (req, res) => {
    let { id, name, address, phone, email, description } = req.body;
    let dataCustomerUpdate = { id, name, address, phone, email, description };
    let result = await updateCustomerService(dataCustomerUpdate);
    return res.status(200).json({
      EC: 0,
      data: result,
      status: "OK updated",
    });
  },
  deleteACustomer: async (req, res) => {
    let id = req.body.id;
    let result = await deleteCustomerService(id);
    return res.status(200).json({
      EC: 0,
      data: result,
      status: "OK da xoa",
    });
  },
};
