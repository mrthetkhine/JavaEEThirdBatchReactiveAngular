class Point{
    readonly name : string;
    constructor(x:number,y :number)
    {
        this.x = x;
        this.y = y;
        this.name = "Hello"
    }
    get myName(){
        return this.name;
    }
    x:number;
    y : number;
}
let p = new Point(10,20);
console.log("Point p ",p);
console.log("Name ",p.myName);