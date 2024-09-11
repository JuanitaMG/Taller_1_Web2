const users = [
    { name: "Carlos", age: 20 },
    { name: "Juana", age: 17 },
    { name: "Oliver", age: 25 },
    { name: "Katherine", age: 30 },
  ];

const UsuariosMayoresDe18 = users
    .filter(function(user){
      return user.age > 18
    })
    .map(function(user) {
      return {
        ...user,
      ageInDays: user.age * 365
      }
    })

  console.log(UsuariosMayoresDe18)

  