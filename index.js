
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let whoIndx = who[Math.floor(Math.random()*who.length)];
let ActIndx = action[Math.floor(Math.random()*action.length)];
let whatIndx = what[Math.floor(Math.random()*what.length)];
let whenIndx = when[Math.floor(Math.random()*when.length)];

/*return who[whoIndx]+''+ action[ActIndx]+''+what[whatIndx]+''+when[whenIndx];*/
console.log(whoIndx,ActIndx,whatIndx,whenIndx)
