var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }
 
 var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]
      
function studentNames(students){
  for (var studentName in students){
    console.log(students.first_name + " " + students.last_name);
  }
}

function studentsAndInstructors(users){
  var count;
  var sum;
  for (var userType in users){
    console.log(userType);
    count = 0;
    for (var i = 0; i < users[userType].length; ++i){
      sum = users[userType][i].first_name.length + users[userType][i].last_name.length;
      ++count;
      console.log(count + " - " + users[userType][i].first_name.toUpperCase() + " " + 
        users[userType][i].last_name.toUpperCase() + " - " + sum);
    }
  }
}