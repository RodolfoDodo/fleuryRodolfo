/* global Given, When, Then */


import loc from '../locators'

const url = 'https://www.fleury.com.br/';

Given('que acesso o site fleury', () => {
    cy.viewport(1024, 1000)
    cy.clearCookies()     // clear all cookies
    cy.visit(url);
})

When('seleciono uma unidade', () => {
    cy.contains(loc.UNIDADE.BTN_UNIDADES).click()
    cy.get(loc.FACILIDADE.BTN_FACILIDADE).click()
    cy.get(loc.FACILIDADE.ESCOLHA).click()
    cy.get(loc.SELECIONA_UNIDADE.ESCOLHA_UNIDADE).click()
})

Then('verifico o nome da unidade', () => {
    cy.get(loc.NOME.NOME_UNIDADE).should('have.text', 'Paraíso')
})