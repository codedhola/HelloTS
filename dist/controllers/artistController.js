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
exports.editArtist = exports.createArtist = exports.getAnArtist = exports.getAllArtist = void 0;
const db_1 = require("./../config/db");
const artistQuery_1 = __importDefault(require("./../database/queries/artistQuery"));
// @get All artist => '/api/v1/artist'
const getAllArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield db_1.pool.query(artistQuery_1.default.getAllArtist);
    res.status(200).json({
        status: "Success",
        results: response.rows.length,
        data: {
            data: response.rows
        }
    });
});
exports.getAllArtist = getAllArtist;
// @get a single artist => '/api/v1/artist/;id'
const getAnArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const response = yield db_1.pool.query(artistQuery_1.default.getAnArtist, [id]);
    res.status(200).json({
        status: "Success",
        data: {
            data: response.rows[0]
        }
    });
});
exports.getAnArtist = getAnArtist;
// @create an artist  => '/api/v1/artist'
const createArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, dob, country } = req.body;
    const response = yield db_1.pool.query(artistQuery_1.default.createArtist, [name, dob, country]);
    res.status(200).json({
        status: "Success",
        data: {
            data: response.rows[0]
        }
    });
});
exports.createArtist = createArtist;
// @Edit an artist  => '/api/v1/artist/:id'
const editArtist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, dob, country } = req.body;
    const id = req.params.id;
    const response = yield db_1.pool.query(artistQuery_1.default.editArtist, [name, dob, country, id]);
    res.status(200).json({
        status: "Success",
        data: {
            data: response.rows[0]
        }
    });
});
exports.editArtist = editArtist;
