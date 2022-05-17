const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");
const Ebook = require("../models/ebook-model");
const Notes = require("../models/notes-model");
const News = require("../models/news-model");
const Paper = require("../models/paper-model");
//-------- Ebooks -------------
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
// ------------ Notes --------
const createNotes = async (req, res) => {
  console.log(req.file);
  const note = await Notes.create({
    ...req.body,
    notesDoc: req.files.notesDoc[0].path,
    notesImage: req.files.notesImage[0].path,
  });

  res.status(StatusCodes.CREATED).json({ msg: "Notes Created Succesfully" });
};
const getAllNotes = async (req, res) => {
  const notes = await Notes.find({});
  if (!notes) {
    throw new NotFoundError("No Notes Found");
  }
  res.status(StatusCodes.OK).json({ ...notes });
};
const getSingleNotes = async (req, res) => {
  const notes = await Notes.findOne({ _id: req.params.id });
  if (!notes) {
    throw new NotFoundError("Notes Not Found");
  }
  res.status(StatusCodes.OK).json({ notes });
};
const deleteNotes = async (req, res) => {
  const deletedNotes = await Notes.findByIdAndDelete({ _id: req.params.id });
  if (!deletedNotes) {
    throw new NotFoundError("Notes not found");
  }
  res.status(StatusCodes.OK).json({ msg: "Notes Deleted" });
};
// news
const createNews = async (req, res) => {
  const news = await News.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ msg: "News Created" });
};
const editNews = async (req, res) => {
  const news = await News.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ msg: "News Updated" });
};
const deleteNews = async (req, res) => {
  const news = await News.findByIdAndDelete({ _id: req.params.id });
  res.status(StatusCodes.OK).json({ msg: "News Deleted" });
};
const getAllNews = async (req, res) => {
  const news = await News.find({});
  if (!news) {
    throw new NotFoundError("No News Found");
  }
  res.status(StatusCodes.OK).json({ ...news });
};
const getSingleNews = async (req, res) => {
  const news = await News.findOne({ _id: req.params.id });
  if (!news) {
    throw new NotFoundError("News does not exist");
  }
  res.status(StatusCodes.OK).json({ news });
};
// paper
const createPaper = async (req, res) => {
  const paper = await Paper.create({ ...req.body, paperDoc: req.file.path });
  res.status(StatusCodes.CREATED).json({ msg: "Paper Created" });
};
const viewAllPapers = async (req, res) => {
  const papers = await Paper.find({});
  res.status(StatusCodes.OK).json({ papers });
};
const deletePaper = async (req, res) => {
  const deletedPaper = await Paper.findByIdAndDelete({ _id: req.paramas.id });
  res.status(StatusCodes.OK).json({ msg: "Paper Deleted" });
};

module.exports = {
  createEbook,
  deleteEbook,
  getAllEbooks,
  getSingleEbook,
  createNotes,
  getAllNotes,
  getSingleNotes,
  deleteNotes,
  createNews,
  deleteNews,
  editNews,
  getAllNews,
  getSingleNews,
  createPaper,
  viewAllPapers,
  deletePaper,
};
