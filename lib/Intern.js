// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function Intern (name, id, email){
    this.role = 'Intern'
    this.name = name
    this.id = id
    this.email = email


    this.getName = function(){
        return this.name
    }
    this.getId = function(){
        return this.id
    }

    this.getSchool = function(){
        return this.name
    }
  

    this.getRole = function(){
        return this.role
    }
}
module.exports = Employee