const Worker = require("../models/worker_model.js");

const getAllWorkers = async (request, response) => {
  try {
    const Workers = await Worker.findAll();
    return response.status(200).json(Workers);
  } catch (error) {
    console.log(error);
  }
};

const getOneWorker = async (req, res) => {
  try {
    const Worker = await Worker.findByPk(req.params.id);
    if (Worker) {
      return res.status(200).json(Worker);
    } else {
      return res.status(404).send("Worker not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createWorker = async (req, res) => {
  try {
    const Worker = await Worker.create({
      user_id: req.body.user_id,
      Worker: req.body.Worker
    });
    return res
      .status(200)
      .json({ message: "Worker created", Worker: Worker });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const updateWorker = async (req, res) => {
  try {
    const Worker = await Worker.findByPk(req.params.id);
    const updateWorker = await Worker.update(req.body);
    Worker.save();
    if (updateWorker) {
      return res
        .status(200)
        .json({ message: "Worker updated", Worker: updateWorker });
    } else {
      return res.status(404).send("Worker not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};


const deleteWorker = async (req, res) => {
  try {
    const Worker = await Worker.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (Worker) {
      return res.status(200).json("Worker deleted");
    } else {
      return res.status(404).send("Worker not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllWorkers,
  getOneWorker,
  createWorker,
  updateWorker,
  deleteWorker,
};
