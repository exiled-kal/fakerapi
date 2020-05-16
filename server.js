const express = require('express');

const app = express();


app.use(express.json())

class User {
    constructor() {
        this._id = faker.user.uuid();
        this.firstName = faker.user.firstName();
        this.lastName = faker.user.lastName();
        this.phoneNumber = faker.user.phoneNumber();
        this.email = faker.user.email();
        this.password = faker.user.password();
    }
}

class Company {
    constructor() {
        this._id = faker.company.uuid();
        this.companyName = faker.company.companyName();
        this.street = faker.company.streetName();
        this.city = faker.company.city();
        this.state = faker.company.state();
        this.zipCode = faker.company.zipCode();
        this.country = faker.company.country();
    }
}

app.get('/', (req, res) => {
    
    res.json({message:'Welcome User'})
});

app.post('/api/users', (req,res) =>{
    console.log('This is the request body', req.body);
    res.json({message: 'Users created!'})
})

app.get('/api/users/new', (req,res) =>{
    console.log('This is the request body', req.body);
    res.json({message: 'Users is logged!'})
})

app.post('/api/companies', (req,res) =>{
    console.log('This is the request body', req.body);
    res.json({message: 'Companies created!'})
})

app.get('/api/companies/new', (req,res) =>{
    console.log('This is the request body', req.body);
    res.json({message: 'Companies is logged!'})
})
app.listen(8000, () => console.log('Listening on port 8000!'));