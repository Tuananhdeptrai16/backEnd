const Customers = require("../models/customer");

module.exports = {
  createCustomerService: async (customerData) => {
    console.log("check customerData: ", customerData);
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
};
