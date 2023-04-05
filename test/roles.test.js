const supertest = require('supertest');
const {app, server} = require('../app');
const db = require('../infrastructure/persistence/database');

const api = supertest(app);

const RolService = require('../application/services/rolService');
const RolRepository = require('../infrastructure/persistence/repositories/rolRepository');
const rolService = new RolService(new RolRepository());

const initialRoles = [
    {
        idRol: '1',
        denomination: 'admin'
    },
    {
        idRol: '2',
        denomination: 'ventas'
    }
]

beforeEach(async () =>{
    rolService.deleteAll();

    for(let rol of initialRoles)
    {
        await rolService.create(rol);
    }

})

test('values returned as json', async()=>{
    await api
        .get('/api/v1/roles')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('There are two roles', async()=>{
    const response = await api.get('/api/v1/roles');
    expect(response.body).toHaveLength(initialRoles.length);
})

afterAll(()=>
    db.close(),
    server.close()
)