const { StatusCodes } = require("http-status-codes");
const Ebook = require("../models/ebook-model");

const createEbook = async (req, res) => {
  console.log("in create ebook");
  const ebook = await Ebook.create({
    ...req.body,
    ebookImage: req.files.ebookImage[0].path,
    ebookDoc: req.files.ebookDoc[0].path,
  });

  res.status(StatusCodes.CREATED).json({ msg: "Ebook Created Succesfully" });
};
const check = async (req, res) => {
  res.send("reached here");
};

module.exports = {
  createEbook,
  check,
};
