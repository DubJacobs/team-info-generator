// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer (name, id, email, github){
    this.role = 'Engineer';
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;


    this.getName = function(){
        return this.name
    }
    this.getId = function(){
        return this.id
    }
    this.getGithub = function(){
        return this.github;
    }
    this.getRole = function(){
        return this.role
    }
}
module.exports = Engineer
