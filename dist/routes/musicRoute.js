"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const musicController_1 = require("./../controllers/musicController");
const router = (0, express_1.Router)();
router.get("/", musicController_1.getAllMusic);
router.get("/:id", musicController_1.getMusic);
router.post("/", musicController_1.uploadMusic);
router.patch("/:id", musicController_1.updateMusic);
exports.default = router;