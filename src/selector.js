let axios = require('axios');
let safeEval = require('safe-eval');

const caller = `async () => {
    let res = await axios.get('https://reqres.in/api/users/2');
    return res.data.data.first_name;
}`

// eval(caller)().then(res =>{
//     console.log(res);
// });




let code = `(async function respond (inputText) {
    var language = 'French';
    var transalatedOutPut = await axios.get('https://reqres.in/api/users/2');
    
    return  "Oh in french " + inputText +" means " + transalatedOutPut.data.data.email;
})`

let evaluated = safeEval(code, context);

let ev = async (inputText) => {
    let res = await evaluated();
    console.log(res);
}
ev('hey');