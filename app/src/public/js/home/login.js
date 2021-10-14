"use strict";

console.log("yes");

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        psword : psword.value,
    };
    
    fetch("/login", {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
    })
    .then((res)=> res.json())
    .then(console.log);
    //promise타입은 then으로 받을 수 있다.
}