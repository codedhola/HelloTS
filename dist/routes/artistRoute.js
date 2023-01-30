"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const artistController_1 = require("./../controllers/artistController");
const router = (0, express_1.Router)();
router.get('/', artistController_1.getAllArtist);
router.post('/', artistController_1.createArtist);
router.get('/:id', artistController_1.getAnArtist);
exports.default = router;
