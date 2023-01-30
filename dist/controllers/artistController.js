"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteArtist = exports.editArtist = exports.createArtist = exports.getAnArtist = exports.getAllArtist = void 0;
const db_1 = require("./../config/db");
const artistQuery_1 = __importDefault(require("./../database/queries/artistQuery"));
// @get All artist => '/api/v1/artist'
const getAllArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.pool.query(artistQuery_1.default.getAllArtist);
        return res.status(200).json({
            status: "Success",
            results: response.rows.length,
            data: {
                data: response.rows
            }
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "Failed",
            message: err
        });
    }
});
exports.getAllArtist = getAllArtist;
// @get a single artist => '/api/v1/artist/;id'
const getAnArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const response = yield db_1.pool.query(artistQuery_1.default.getAnArtist, [id]);
        return res.status(200).json({
            status: "Success",
            data: {
                data: response.rows[0]
            }
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "Failed",
            message: err
        });
    }
});
exports.getAnArtist = getAnArtist;
// @create an artist  => '/api/v1/artist'
const createArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, dob, country } = req.body;
    try {
        const response = yield db_1.pool.query(artistQuery_1.default.createArtist, [name, dob, country]);
        return res.status(200).json({
            status: "Success",
            data: {
                data: response.rows[0]
            }
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "Failed",
            message: err
        });
    }
});
exports.createArtist = createArtist;
// @Edit an artist  => '/api/v1/artist/:id'
const editArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, dob, country } = req.body;
    const id = req.params.id;
    console.log(name);
    try {
        const response = yield db_1.pool.query(artistQuery_1.default.editArtist, [name, dob, country, id]);
        console.log(response);
        return res.status(200).json({
            status: "Success",
            data: {
                data: response.rows[0]
            }
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "Failed",
            message: err
        });
    }
});
exports.editArtist = editArtist;
// @Edit an artist  => '/api/v1/artist/:id'
const deleteArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const response = yield db_1.pool.query(artistQuery_1.default.deleteArtist, [id]);
        return res.status(204).json();
    }
    catch (err) {
        return res.status(500).json({
            status: "Failed",
            message: err
        });
    }
});
exports.deleteArtist = deleteArtist;
