const Project = require("../models/project");
const aqp = require("api-query-params");

module.exports = {
  createProject: async (dataProjects) => {
    try {
      if (dataProjects.type === "EMPTY-PROJECT") {
        let result = await Project.create(dataProjects);
        return result;
      }
      if (dataProjects.type === "ADD-USERS") {
        let myProject = await Project.findById(dataProjects.projectId).exec();
        for (let i = 0; i < dataProjects.usersArr.length; i++) {
          myProject.usersInfor.push(dataProjects.usersArr[i]);
        }
        let result1 = await myProject.save();
        return result1;
      }
      if (dataProjects.type === "REMOVE-USERS") {
        let newProject = await Project.findById(dataProjects.projectId).exec();
        for (let i = 0; i < dataProjects.usersArr.length; i++) {
          newProject.usersInfor.pull(dataProjects.usersArr[i]);
        }
        let result1 = await newProject.save();
        return result1;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  },
  getProject: async (queryString) => {
    const page = queryString.page;
    const { filter, limit, population } = aqp(queryString);
    delete filter.page;
    let offset = (page - 1) * limit;
    let result = Project.find(filter)
      .populate(population)
      .skip(offset)
      .limit(limit)
      .exec();
    return result;
  },
  updateProject: async (data) => {
    let result = await Project.updateOne({ _id: data.id }, { ...data });
    return result;
  },
  deleteProject: async (id) => {
    let result = await Project.deleteById(id);
    return result;
  },
};
