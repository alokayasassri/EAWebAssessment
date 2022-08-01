
 /// <reference types="cypress"/>

describe('Test 1 : Festivals Web App Validation ', () => {
 
 beforeEach(function(){

  cy.visit('http://localhost:4200/festivals')
 })


  it('Test 2 : Verify Festivals Home page load', () => {
   
  
    cy.log("Web Page successfully loaded")
  
  })

  it('Test 3 : Verify Trainerella Festival availability on Home page', () => {
   
    if(cy.get('html').contains('Trainerella'))
    { 
      cy.log("Trainerella Festival is available on the Home Page")
    }
   
  })

  it('Test 4 : Verify Festivals list', () => {
    
    cy.contains('LOL-palooza')
    cy.contains('Small Night In')
    cy.contains('Twisted Tour')
    cy.contains('Trainerella') 
    cy.log("All Festivals are available on the Home Page")
    
  })

  it('Test 5 : Verify Bands list', () => {
    cy.visit('http://localhost:4200/festivals')
    cy.contains('Auditones')
    cy.contains('Summon')
    cy.contains('Fourth Woman Records')
    cy.log("All Bands are available on the Home Page")
  })




})