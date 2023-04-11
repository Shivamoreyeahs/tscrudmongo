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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.signIn = exports.createUser = void 0;
const userSchema_1 = require("../models/userSchema");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const existingUser = yield userSchema_1.User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).send("Email already registered");
        }
        const user = new userSchema_1.User(req.body);
        yield user.save();
        res.send(user);
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});
exports.createUser = createUser;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const password = req.body.password;
        // console.log(email, password);
        const existingUser = yield userSchema_1.User.findOne({ email: email });
        if (existingUser) {
            return res.status(200).send({ message: "User Login Successfully" });
        }
        else {
            res.status(200).json({ message: "User does not exist" });
        }
    }
    catch (err) {
        return res.status(400).send(err.message);
    }
});
exports.signIn = signIn;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log(id);
        let user = yield userSchema_1.User.findByIdAndUpdate(id, req.body, { new: true });
        console.log(user);
        res.status(200).send("User Updated successfully");
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        console.log(id);
        console.log(req.body);
        let user = yield userSchema_1.User.findByIdAndDelete(id);
        // console.log(user); 
        res.status(200).send("User Deleted successfully");
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
});
exports.deleteUser = deleteUser;
