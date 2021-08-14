let obj = {
    name : "Tk",
    age : 102
}
let obj2 = {
    name : "Tk",
    age : 102,
    school : "UCSY"
}
interface People{
    name: string;
    age : number;
}
let a:People = obj;
console.log("A ",a);

a = obj2;
console.log("A ",a);

obj = obj2;