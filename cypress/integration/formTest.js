describe("Testing the pizza routes and form", function() {
    beforeEach(function() {
      cy.visit("http://localhost:3000/form");
    });
    it("Add test to inputs and submit form", function() {
      cy
      .get('input[name="name"]')
      .type("Matthew")
      .should("have.value", "Matthew")
      cy
      .get('textarea[name="specInstr"]')
      .type("break in")
      .should("have.value", "break in")
      cy
      .get('select[name="size"]')
      .select('Lg')
      .should("have.value", "Lg")
      cy
      .get('[type=checkbox]')
      .check()
      .should("be.checked")
      cy
      .get('button[name="submit"]')
      .click()
    });
   
    
  }); 
 