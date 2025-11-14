
// type GenericArray = Array<string>


type GenericArray<value> = Array<value>;



const friends: GenericArray<string> =["rafiq", "karim", "musi"];
// const friends: GenericArray=["rafiq", "karim", "musi"];

const rollNumbers: GenericArray<number> = [1,7,11];

// const isEligibleList: boolean[] = [ true, false, true];

const isEligibleList: Array<boolean> = [ true, false, true];

consr sqrFunc = (value: number) => {
    return value * value;
};

sqrFunc(4);

type Coordinates = [number, number];

const coordinates1: Coordinates = [20, 30];
const coordinates2: Coordinates = [20, 30];




// type GenericObject

// const userList = [
//     {
//         name:"a",
//         age: 22,
//     },
//     {
//         name: "s", 
//         age: 45,
//     }
// ];