"use strict"

class UserStorage{
    static #users = {
        id : ["asky0223", "aileen", "seoyul"],
        psword : ["1234", "some", "love"],
        name : ["우리밋", "나개발", "사랑꾼"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{ //reduce가 제대로 뭔지 확인 필요!!
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            } //newUsers 는 초기값
            return newUsers;
        }, {});
        return newUsers;
        
    }
}

module.exports = UserStorage;