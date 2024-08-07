const Enterprise = require("../models/enterprise_model.js");

const getAllEnterprises = async (request, response) => {
  try {
    const Enterprises = await Enterprise.findAll();
    return response.status(200).json(Enterprises);
  } catch (error) {
    console.log(error);
  }
};

const getOneEnterprise = async (req, res) => {
  try {
    const Enterprise = await Enterprise.findByPk(req.params.id);
    if (Enterprise) {
      return res.status(200).json(Enterprise);
    } else {
      return res.status(404).send("Enterprise not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createEnterprise = async (req, res) => {
  try {
    const Enterprise = await Enterprise.create({
      user_id: req.body.user_id,
      Enterprise: req.body.Enterprise
    });
    return res
      .status(200)
      .json({ message: "Enterprise created", Enterprise: Enterprise });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateEnterprise = async (req, res) => {
  try {
    const Enterprise = await Enterprise.findByPk(req.params.id);
    const updateEnterprise = await Enterprise.update(req.body);
    Enterprise.save();
    if (updateEnterprise) {
      return res
        .status(200)
        .json({ message: "Enterprise updated", Enterprise: updateEnterprise });
    } else {
      return res.status(404).send("Enterprise not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteEnterprise = async (req, res) => {
  try {
    const Enterprise = await Enterprise.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (Enterprise) {
      return res.status(200).json("Enterprise deleted");
    } else {
      return res.status(404).send("Enterprise not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllEnterprises,
  getOneEnterprise,
  createEnterprise,
  updateEnterprise,
  deleteEnterprise,
};
