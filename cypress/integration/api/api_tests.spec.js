describe('all api tests', () => {

    Cypress.config('baseUrl','https://reqres.in/api')

    it('GET 1', () => {

        cy.request('GET', '/users?page=2')
            .then((response) => {
                expect(response).to.have.property('status', 200);
                expect(response.status).to.equal(200);
                expect(response.body).not.to.be.null;
                expect(response.body).to.have.property('page',2);
                expect(response.body.data).to.have.length(6);
            })
    })

    it('GET 2', () => {

        cy.request('GET', '/users?page=2').as('user_list')
            
        cy.get('@user_list')
            .should((response) => {
                expect(response).to.have.property('status', 200);
                expect(response.status).to.equal(200);
                expect(response.body).not.to.be.null;
                expect(response.body).to.have.property('page',2);
                expect(response.body.data).to.have.length(6);
            })
    })


    it('GET 3', () => {
        cy.request({
            'method' : 'GET',
            'url' : '/users?page=2',
            headers : {
                'Content-Type' : 'application/json',
            },
            auth: {
               'username' : 'user1',
               'password' : 'pass1' 
            }
        }).then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('page',2);
            expect(response.body.data).to.have.length(6);
        })
    })


    it('POST 1', () => {

        cy.request({
            'method' : 'POST',
            'url' : '/users',
            body: {
                "name": "Raghav",
                "job": "teacher"
            }
        }).then((response) => {
            expect(response).to.have.property('status', 201);
            expect(response.status).to.equal(201);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('name','Raghav');
        })
    })


    it('POST 2', () => {

        const reqBody = {
            "name": "Raghav",
            "job": "Teacher"
        };

        cy.request('POST','/users', reqBody)
         .then((response) => {
            expect(response).to.have.property('status', 201);
            expect(response.status).to.equal(201);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('name','Raghav');
        })

    })

    it('PUT', () => {

        cy.request({
            'method' : 'PUT',
            'url' : '/users/2',
            body:{
                "name": "morpheus",
                "job": "zion resident"
            }
        })
    })

    it('DELETE', () => {
        cy.request('DELETE', '/users/2')
            .then((response) => {
                expect(response.status).to.be.equal(204);
            })
    })

})