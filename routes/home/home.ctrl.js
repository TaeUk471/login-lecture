"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) =>{
    res.render("home/login");
};

module.exports = {
    home, //hello : hello 형식으로 키가 저장됨.
    login, //login : login
    

};
