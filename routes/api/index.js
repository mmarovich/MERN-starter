const router = require("express").Router();
const specificRoutes = require("./specific");

// Book routes
router.use("/specific", specificRoutes);

module.exports = router;
