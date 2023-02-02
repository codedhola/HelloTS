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
exports.deleteMusic = exports.updateMusic = exports.uploadMusic = exports.getMusic = exports.getAllMusic = void 0;
const db_1 = require("./../config/db");
const musicQuery_1 = __importDefault(require("./../database/queries/musicQuery"));
const getAllMusic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.pool.query(musicQuery_1.default.getAllMusic);
        return res.status(200).json({
            status: "Success",
            results: response.rowCount,
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
exports.getAllMusic = getAllMusic;
const getMusic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const response = yield db_1.pool.query(musicQuery_1.default.getAMusic, [id]);
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
exports.getMusic = getMusic;
const uploadMusic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, genre, artist_id } = req.body;
    try {
        const response = yield db_1.pool.query(musicQuery_1.default.uploadMusic, [name, genre, artist_id]);
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
exports.uploadMusic = uploadMusic;
const updateMusic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { name, genre, artist_id } = req.body;
    try {
        const response = yield db_1.pool.query(musicQuery_1.default.updateMusic, [name, genre, artist_id, id]);
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
exports.updateMusic = updateMusic;
const deleteMusic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const response = yield db_1.pool.query(musicQuery_1.default.deleteMusic, [id]);
        return res.status(204).json({
            status: "Success"
        });
    }
    catch (err) {
        return res.status(500).json({
            status: "Failed",
            message: err
        });
    }
});
exports.deleteMusic = deleteMusic;
