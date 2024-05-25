#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlueBright("\t\t**************WELCOME TO MY OBJECT ORIENTED PROGRAMM (OOP)**************"));
console.log(chalk.bgCyan("\t\t==============================================================================="));

class Student{
    name:string
    constructor(n:string){
        this.name=n
    }
}
class Person{
    students:Student[]=[]
        addStudent(obj:Student){
            this.students.push(obj)
        }

        }
        const persons = new Person()

        const programStart = async(persons:Person)=>{
            console.log(chalk.bgBlueBright("Welcome!"));
           do{
            const ans = await inquirer.prompt({
                name:"select",
                type:"list",
                message : chalk.bgGreenBright("Whom would you like to interact with?"),
                choices:["staff","student","exit"]
            })
            if(ans.select == "staff"){
                console.log(chalk.bgBlue("You uproach the room.Please ask any question"));
                }
            else if(ans.select == "student"){
                const ans = await inquirer.prompt({
                  name : "student",
                  type : "input",
                  message : chalk.bgGreenBright("Enter the student's name you wish to engage with:")  
                })
                const student = persons.students.find(val => val.name == ans.student)
            
            if(!student){
                const name = new Student(ans.student)
                persons.addStudent(name)
                console.log(chalk.bgBlue(`Hello i am ${name.name}. Nice to meet you!`));
                console.log(chalk.bgBlueBright("New student added"));
                console.log(chalk.bgBlueBright("Current student list:"));
                console.log(persons.students);
            }else{
                console.log(chalk.bgBlue(`Hello i am ${student.name}.Nice to see you again!`));
                console.log(chalk.bgMagenta("Already existing in list:"));
                console.log(chalk.bgMagenta(persons.students));
                }
            }else if(ans.select =="exit"){
                console.log(chalk.bgRedBright("Exiting the program...")); 
                process.exit();   
            } 
        }while(true) 
    }
         programStart(persons) ;            
