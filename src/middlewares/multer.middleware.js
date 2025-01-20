import express from "express";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      `${file.originalname}-${uniqueSuffix}${path.extname(file.originalname)}`
    );
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 50 }, // Set your file size limit
}).fields([
  { name: "propertyImages", maxCount: 10 }, // Adjust maxCount as needed
  { name: "propertyVideos", maxCount: 2 },
]);
