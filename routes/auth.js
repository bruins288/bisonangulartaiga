const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth");

router.post("/login", controller.login);
router.get("/reports", controller.reports);
router.post("/settings", controller.settings);

module.exports = router;
