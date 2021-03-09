/// <reference types="cypress" />

import loc from '../support/locators'

describe('Acesso ao Site', () => {
    before(() => {
        cy.viewport(1024, 1000)
        cy.clearCookies()     // clear all cookies
        cy.visit('https://www.fleury.com.br/')

    })

    it('Verificando nome de uma UNIDADE', () => {
        cy.contains(loc.UNIDADE.BTN_UNIDADES).click()
        cy.get(loc.FACILIDADE.BTN_FACILIDADE).click()
        cy.get(loc.FACILIDADE.ESCOLHA).click()
        cy.get(loc.SELECIONA_UNIDADE.ESCOLHA_UNIDADE).click()
        cy.get(loc.NOME.NOME_UNIDADE).should('have.text', 'Paraíso')

    })
})