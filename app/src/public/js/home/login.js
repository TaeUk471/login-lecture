"use strict";

console.log("yes");

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        psword : psword.value,
    };
    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login", {
        body: JSON.stringify(req)
    })
}