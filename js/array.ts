let a = [10,20,30];
let b = Array<string>();
b.push("10","20");

console.log("B ",b);

function display(name:string)
{
    console.log("Hello ",name);
}
display("Hello");
display("123")

function sum(a:number, b: number):number{
    return a+b;
}
console.log("Sum ",sum(1,3));