

// const createArrayWithString = (value: string) =>
// [value];

// const createArrayWithNumber = (value: number) =>
// [value];

// const createArrayWithUserobj = (value: { id:
//     number; name: string
// }) => {
//     return[value];
// };


// const arrString = createArrayWithString('Apple')
// const  arrnumber = createArrayWithNumber(43)
// const  arrObj    = createArrayWithUserobj({
//     id:354,
//     name: "sab ba",
// }) 



const createArrayWithGeniric = <T>(value: T) => {
    return [value];
}


const arrString = createArrayWithGeniric('Apple')
const  arrnumber = createArrayWithGeniric(43)
const  arrObj    = createArrayWithGeniric({
    id:354,
    name: "sab ba",
}) 

// [value];

// tuple 


const createArrayWithTuple = <X, Y>(param1: X, 
    param2: Y)=>  [param1, param2];

const res1= createArrayWithTuple('sabba', false);
const res2 = createArrayWithTuple(222, "sasdas");

