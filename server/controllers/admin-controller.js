const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
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
const getAllEbooks = async (req, res) => {
  const ebooks = await Ebook.find({});
  if (!ebooks) {
    throw new NotFoundError("No Ebooks Found");
  }
  res.status(StatusCodes.OK).json({ ...ebooks });
};
const getSingleEbook = async (req, res) => {
  const ebook = await Ebook.findOne({ _id: req.params.id });
  if (!ebook) {
    throw new NotFoundError("Ebook Not Found");
  }
  res.status(StatusCodes.OK).json({ ebook });
};
const deleteEbook = async (req, res) => {
  const deletedEbook = await Ebook.findByIdAndDelete({ _id: req.params.id });
  if (!deletedEbook) {
    throw new NotFoundError("Ebook not found");
  }
  res.status(StatusCodes.OK).json({ msg: "Ebook Deleted" });
};
const check = async (req, res) => {
  res.send("reached here");
};

module.exports = {
  createEbook,
  deleteEbook,
  getAllEbooks,
  getSingleEbook,
  check,
};
