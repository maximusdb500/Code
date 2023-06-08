console.log("--------------");
console.log("Rise and Shine!");
console.log("Ready for a new day!");
console.log("--------------");

console.log("\n**********Concantentation with template literals**********\ n")

let str1 = "JavaScript";
let str2 = "fun";

console.log(`I am writing code in ${str1}`);
console.log(`Formatting in ${str1} is ${str2}`);

const people = ["Aaron", "Mel", "John"];
const one = 1;
const str = "Hello World";
const b = true;
const person = {
    firstName: "Aaron",
    lastName: "Powell"
};

function sayHello(person) {
    ocnsole.log("Hello " + person.firstName)
}
console.log("\n----type of   ------");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

console.log("-----instance of-----");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);

const num1 = '150';
const flo1 = '1.50';
console.log("*****Converting strings to integers*******");
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF'));

console.log("*******Converting strings to Float********");
console.log(parseFloat('1.00'));
console.log(parseFloat(flo1));
console.log(parseFloat('ABC'));
console.log("****Template Literals****");
console.log(parseInt(`${1 + 1}`));

console.log("*******Converting Numbers to Strings*******");
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());

console.log('*****Dates*****');
const now = new Date();
const win95Launch = new Date(1995, 7, 24);
console.log(win95Launch);
const randomDate = new Date(2015, 3, 12, 6, 25, 58);
console.log(now);

console.log('*****If-Else*****')
const status = 200;

if (status === 200) {
    console.log('OK');
} else if (status === 400) {
    console.log('Error!');
} else {
    console.log('Unknown status');
}

const message = (status === 200) ? 'OK!' : 'Error!'; //shortcut to If-Else
console.log(message);

console.log('*******Case/Switch Statements*******')
const statue = 800;
switch (statue)  {
    case 200:
        console.log('OK!');
        break;
    case 400:
    case 500:
        console.log('Error');
        break;
    default:
        console.log('Unknown value');
        break
}