const WeeklyMenu = require("../models/weekly-menu_model.js");

const getAllWeeklyMenus = async (request, response) => {
  try {
    const WeeklyMenus = await WeeklyMenu.findAll();
    return response.status(200).json(WeeklyMenus);
  } catch (error) {
    console.log(error);
  }
};

const getOneWeeklyMenu = async (req, res) => {
  try {
    const WeeklyMenu = await WeeklyMenu.findByPk(req.params.id);
    if (WeeklyMenu) {
      return res.status(200).json(WeeklyMenu);
    } else {
      return res.status(404).send("Weekly menu not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createWeeklyMenu = async (req, res) => {
  try {
    const WeeklyMenu = await WeeklyMenu.create({
      user_id: req.body.user_id,
      WeeklyMenu: req.body.WeeklyMenu
    });
    return res
      .status(200)
      .json({ message: "Weekly menu created", WeeklyMenu: WeeklyMenu });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateWeeklyMenu = async (req, res) => {
  try {
    const WeeklyMenu = await WeeklyMenu.findByPk(req.params.id);
    const updateWeeklyMenu = await WeeklyMenu.update(req.body);
    WeeklyMenu.save();
    if (updateWeeklyMenu) {
      return res
        .status(200)
        .json({ message: "Weekly menu updated", WeeklyMenu: updateWeeklyMenu });
    } else {
      return res.status(404).send("Weekly menu not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteWeeklyMenu = async (req, res) => {
  try {
    const WeeklyMenu = await WeeklyMenu.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (WeeklyMenu) {
      return res.status(200).json("WeeklyMenu deleted");
    } else {
      return res.status(404).send("WeeklyMenu not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllWeeklyMenus,
  getOneWeeklyMenu,
  createWeeklyMenu,
  updateWeeklyMenu,
  deleteWeeklyMenu,
};
