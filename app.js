"use strict";

const express = require("express");
const app = express();

const PORT = 3000;

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

const home = require("./routes/home"); //routes로 가고 home안에있는 자바스크립트 파일을 읽어와줘.
app.use("/", home); //use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;