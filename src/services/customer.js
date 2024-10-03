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
};
