const express = require("express");
const router = express.Router();
const {
  createStudyScheme,
  viewAllStudySchemes,
  deleteStudyScheme,
} = require("../controllers/admin-controller");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/studyschemes/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 25,
  },
  fileFilter: fileFilter,
});

router.post(
  "/create-studyScheme",
  upload.single("studySchemeDoc"),
  createStudyScheme
);
router.route("/").get(viewAllStudySchemes);
router.route("/:id").delete(deleteStudyScheme);

module.exports = router;
