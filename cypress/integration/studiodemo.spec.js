describe('cypress studio demo', function(){
    it('login test', function(){
        
    })

    /* === Test Created with Cypress Studio === */
    it('my first recorded test', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://trytestingthis.netlify.app/');
        cy.get('form > fieldset').click();
        cy.get('#fname').type('Raghav');
        cy.get('#lname').type('Pal');
        cy.get('#male').check();
        cy.get('#option').select('option 1');
        cy.get('#owc').select(['option 2']);
        cy.get('#owc').select(['option 2', 'option 3']);
        cy.get('[name="option2"]').check();
        cy.get('#day').click();
        cy.get('#a').click();
        cy.get('#uname').type('test');
        cy.get('#pwd').type('test');
        cy.get('.row').click();
        cy.get('[type="submit"]').click();
        cy.get('h2').click();
        cy.get('h4 > a').click();
        /* ==== End Cypress Studio ==== */
    });
})