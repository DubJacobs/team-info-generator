// TODO: Write code to define and export the Employee class
// function Employee (name, id, email){
// this.role = 'Employee'
// this.name = name
// this.id = id
// this.email = email
//     this.getName = function(){
//         return this.name
//     }
//     this.getId = function(){
//         return this.id
//     }
//     this.getEmail = function(){
//         return this.email
//     }
//     this.getRole = function(){
//         return this.role
//     }
// }
class Employee {
    constructor(name, id, email) {
        this.role = 'Employee'
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return this.role
    }
}
module.exports = Employee

