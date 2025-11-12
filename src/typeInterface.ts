type User = {
    name: string;
    age: number;
};

interface IUser {
    name: string;
    age: number;
};

type Role = {
    role: 'admin' | 'user'
};

type UserWithRole = User & Role;


interface IUserWithRole  extends IUser{
    role: 'admin' | 'user' ;
}


const user1 : UserWithRole= {
    name: 'Mr.J',
    age: 55,
    role: 'admin'
};

const user2 : IUserWithRole= {
    name: 'Mr.m',
    age: 59,
    role: 'user'
};

type IsAdmin = boolean ;

const IsAdmin : IsAdmin = true ;


// function 
 type Add = (num1: number, num2: number) =>
    number;

 interface IAdd {
    (num1: number, num2: number): number
 }

 const add: Add = (num1, num2) => num1 + num2 ;




 type Friends = string[];
//  const friends: Friends = ["A", "B", "C"];
                         

 interface IFriends {
    [index: number]  : string
 }

  const friends: IFriends = ["A", "B", "C"];