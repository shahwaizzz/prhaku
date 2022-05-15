const Student = require("../models/student-model");
const { StatusCodes } = require("http-status-codes");
const register = async (req, res) => {
  const student = await Student.create({ ...req.body });
  const token = await student.createJWT();
  res.status(StatusCodes.CREATED).json({ token });
};
const login = async (req, res) => {};

module.exports = {
  login,
  register,
};
