const AdminEnterprise = require("../models/AdminEnterprise_model.js");

const getAllAdminEnterprises = async (request, response) => {
  try {
    const AdminEnterprises = await AdminEnterprise.findAll();
    return response.status(200).json(AdminEnterprises);
  } catch (error) {
    console.log(error);
  }
};

const getOneAdminEnterprise = async (req, res) => {
  try {
    const AdminEnterprise = await AdminEnterprise.findByPk(req.params.id);
    if (AdminEnterprise) {
      return res.status(200).json(AdminEnterprise);
    } else {
      return res.status(404).send("Admin Enterprise not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createAdminEnterprise = async (req, res) => {
  try {
    const AdminEnterprise = await AdminEnterprise.create({
      user_id: req.body.user_id,
      AdminEnterprise: req.body.AdminEnterprise
    });
    return res
      .status(200)
      .json({ message: "Admin Enterprise created", AdminEnterprise: AdminEnterprise });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateAdminEnterprise = async (req, res) => {
  try {
    const AdminEnterprise = await AdminEnterprise.findByPk(req.params.id);
    const updateAdminEnterprise = await AdminEnterprise.update(req.body);
    AdminEnterprise.save();
    if (updateAdminEnterprise) {
      return res
        .status(200)
        .json({ message: "Admin Enterprise updated", AdminEnterprise: updateAdminEnterprise });
    } else {
      return res.status(404).send("Admin Enterprise not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteAdminEnterprise = async (req, res) => {
  try {
    const AdminEnterprise = await AdminEnterprise.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (AdminEnterprise) {
      return res.status(200).json("Admin Enterprise deleted");
    } else {
      return res.status(404).send("Admin Enterprise not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllAdminEnterprises,
  getOneAdminEnterprise,
  createAdminEnterprise,
  updateAdminEnterprise,
  deleteAdminEnterprise,
};
