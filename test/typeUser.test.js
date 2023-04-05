const supertest = require('supertest');
const {app, server} = require('../app');
const db = require('../infrastructure/persistence/database');

const api = supertest(app);

const TypeUserService = require('../application/services/typeUserService');
const TypeUserRepository = require('../infrastructure/persistence/repositories/typeUserRepository');
const typeUserService = new TypeUserService(new TypeUserRepository());

const initialTypeUser = [
    {
        idTypeUser: '1',
        denomination: 'admin',
        rol: '1'
    },
    {
        idTypeUser: '2',
        denomination: 'manager',
        rol: '2'
    }
]

beforeEach(async () =>{
    await typeUserService.deleteAll();

    for(let typeUser of initialTypeUser)
    {
        await typeUserService.create(typeUser);
    }

})

test('values returned as json', async()=>{
    await api
        .get('/api/v1/typesUser')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('There are two typesUser', async()=>{
    const response = await api.get('/api/v1/typesUser');
    expect(response.body).toHaveLength(initialTypeUser.length);
})

test('Insert typeUser', async()=>{
    const typeUser = {
        idTypeUser:'3',
        denomination: 'employee',
        rol: '2'
    }

    await api
            .post('/api/v1/typesUser')
            .send(typeUser)
            .expect(201)
            .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/v1/typesUser');
    expect(response.body).toHaveLength(initialTypeUser.length+1);
})

afterAll(()=>
    db.close(),
    server.close()
)