// const users = [
//     'Diego',
//     'Claiton',
//     'Robson',
//     'Daniel'
// ]
// app.get('/users',(request, response) => {
//     const search = String(request.query.search);

//     const filteredUsers = search ? users.filter(users => users.includes(search)) : users;

//     return response.json(filteredUsers);
// });

// app.get('/users/:id',(request, response) => {
//     var id = Number(request.params.id);

//     return response.json(users[id]);
// });

// app.post('/users', (request, response) => {
//     const data = request.body;

//     const user = {
//         name: data.name,
//         email: data.email,
//     }

//     return response.json(user)
// });