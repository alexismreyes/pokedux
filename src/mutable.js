//Mutable
/* const updateAge = (userInfo) => {
    userInfo.age = userInfo.age + 1;
    return userInfo;
}; */

//Inmutable: ObjectAssign
/* const updateAge = (userInfo) =>{
    return Object.assign({},userInfo,{age: userInfo.age + 1});
} */

//Inmutable: SpreadOperator
const updateAge = (userInfo) =>{
    return {...userInfo, age: userInfo.age +1 }
}

const userInfo = {
    name: 'Eddie',
    age: 22,
    email: 'ed@gmail.com'
};

console.log('userInfo INITIAL', userInfo);

const updateUserInfo = updateAge(userInfo);

console.log('userInfo AFTER',userInfo)
console.log('updatedUser',updateUserInfo);