const {
  createProject,
  getProject,
  updateProject,
  deleteProject,
} = require("../services/projectService");
module.exports = {
  postProject: async (req, res) => {
    const dataProjects = req.body;
    let result = await createProject(dataProjects);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  getAllProject: async (req, res) => {
    let result = await getProject(req.query);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  putProject: async (req, res) => {
    const data = req.body;
    let result = await updateProject(data);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
  dProject: async (req, res) => {
    const id = req.body;
    let result = await deleteProject(id);
    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
