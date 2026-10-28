const employee = {
    name: "John Doe", 
    age: 30, 
    position: "Software Engineer",
    job : function() {
        console.log(`${this.name} is working as a ${this.position}.`);
    } };

    // Call the job method to see the output
employee.job();

const office = function(name, position) {
        return "hello iam working as a " + position + " and my name is " + name;
    }

console.log(office("Tousif", "software engineer"));

