const Customers = require("../models/customer");

module.exports = {
  createCustomerService: async (customerData) => {
    try {
      let result = await Customers.create({
        name: customerData.name,
        address: customerData.address,
        phone: customerData.phone,
        email: customerData.email,
        description: customerData.description,
        image: customerData.image,
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  createCustomerManyService: async (arr) => {
    try {
      let result = await Customers.insertMany(arr);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getCustomerService: async (req, res) => {
    try {
      let results = await Customers.find({});
      return results;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  updateCustomerService: async (dataUpdateCustomer) => {
    try {
      const { id, name, address, phone, email, description } =
        dataUpdateCustomer;

      let result = await Customers.findOneAndUpdate(id, dataUpdateCustomer, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  deleteCustomerService: async (id) => {
    try {
      let result = await Customers.deleteById(id);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  deleteArrayCustomerService: async (dataIds) => {
    try {
      let results = await Customers.deleteMany({ _id: { $in: dataIds } });
    } catch (error) {
      return null;
      console.log(error);
    }
  },
};
