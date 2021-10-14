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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info)=>{ // => id ,psword, name
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    }
    
    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success : ture};
    }
}

module.exports = UserStorage;