var name1: string = 'hitesh';
var isdone: boolean = true;
console.log(isdone);
var decimal: number = 5;
var hex: number = 0xf00d;
console.log(typeof hex);
//string
var fullname: string = 'hitesh jogiya';
var age: number = 21;
var sentence: string = `my name is ${fullname} and my age is ${age}`;
console.log(sentence);
//array
let list: number[] = [1, 2, 3, 4];
let list2: Array<string> = ['hello', 'world'];
console.log(list2);
//tuple
let x: [number, string];
x = [10, 'car'];
console.log(x[1].substring(0));
//enum
enum color {
  red = 10,
  green,
  blue,
}
let c = color.blue;
console.log(c);
//unkonwn
let notsure: unknown;
notsure = 'hello';
notsure = 1;
console.log(typeof notsure);

declare const maybe: unknown;
//const aNumber:number=maybe;
// if(maybe==="string"){
//     const aString:string =maybe;
// }

//any
declare function getValue(key: string): any;
//const str:string = getValue("mystring");
//console.log(str);
let looselytype: any = 4;
console.log(looselytype.toFixed());
let unkonwntype: unknown = 4;
//console.log(unkonwntype.toFixed());

//void
function warnUser(): void {
  console.log('type void');
}
let unusable: void = undefined;
unusable = null;
console.log(unusable);
let u: undefined = undefined;
let n: null = null;
console.log(typeof n);

//never

function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return console.log(error('something failed'));
}
function infiniteloop(): never {
  while (true) {}
}
//object
declare function create(o: object | null): void;
//create({prop:0});
//create(null);
//create(undefined);
//create(2);
//create("hitesh");
var a = 2;
console.log(a.toExponential(2));
