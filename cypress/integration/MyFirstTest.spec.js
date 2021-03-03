/// <reference types="Cypress"/>
describe ("Wikipedia home page", ()=>{
    it("Navigate to Ebglish page",()=>{
cy.visit("https://www.wikipedia.org/");
cy.get('#js-link-box-en').click();
cy.get('#mp-topbanner').should("be.visible"); //top banner should be visible
cy.get('.mw-wiki-logo').should("be.visible"); //logo should be visible
cy.get('#mp-topbanner').should("contain","Welcome to Wikipedia"); //banner shoud contain Welcome to Wikipedia
    });
    it("Test search in main page",()=> {
        cy.visit("https://www.wikipedia.org/");
        cy.get('#searchInput').type("Testing");
        cy.get('.pure-button').click();
        cy.get('#firstHeading').should("contain", "Testing");
    });
});

