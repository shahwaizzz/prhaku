const express = require("express");
const router = express.Router();
const { createEbook, check } = require("../controllers/admin-controller");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "ebookImage") {
      cb(null, "./public/ebook/images/");
    } else {
      cb(null, "./public/ebook/docs/");
    }
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.fieldname === "ebookDoc") {
    // if uploading resume
    if (
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/msword" ||
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      // check file type to be pdf, doc, or docx
      cb(null, true);
    } else {
      cb(null, false); // else fails
    }
  } else {
    // else uploading image
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      // check file type to be png, jpeg, or jpg
      cb(null, true);
    } else {
      cb(null, false); // else fails
    }
  }
};
// const fileFilter = (req, file, cb) => {
//   if (file.fieldname === "ebookImage") {
//     if (
//       file.mimetype === "image/jpeg" ||
//       file.mimetype === "image/png" ||
//       file.mimetype === "image/jpg"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   }
//   if (file.fieldname === "ebookDoc") {
//     if (
//       file.mimetype === "application/pdf" ||
//       file.mimetype === "application/msword" ||
//       file.mimetype ===
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   } else {
//     cb(null, false);
//   }
// };
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 15,
  },
  fileFilter: fileFilter,
});
router.post(
  "/create-ebook",
  upload.fields([
    { name: "ebookImage", maxCount: 1 },
    { name: "ebookDoc", maxCount: 1 },
  ]),
  createEbook
);
router.get("/check", check);

module.exports = router;
