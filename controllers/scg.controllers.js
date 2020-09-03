const doscgModel = require("../models/scgModel");
exports.getDoscgController = (req, res, next) => {
  const doscg = doscgModel.getDoscg();

  res.json(doscg);
};
