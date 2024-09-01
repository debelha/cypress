/// <reference types="cypress" />

context('Dev Finances Agilizei', () => {
    it('Cadastrar entradas', () => {
        cy.visit('https://devfinance-agilizei.netlify.app/')

        cy.get('#data-table tbody tr').should('have.length', 0)
        cy.get('#transaction .button').click() //id + classe
        cy.get('#description').type('Mesada') //id
        cy.get('[name=amount]').type(12) //atributo
        cy.get('[type=date]').type('2024-03-17') //atributo
        cy.get('button').contains('Salvar').click() //valor contido
        cy.get('#data-table tbody tr').should('have.length', 1)
    });
});






