class CheckoutPage {

  checkout() {
    cy.get('[data-test="checkout"]').click();
  }

  addUserInfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
  }

  finishPurchase() {
    cy.get('[data-test="finish"]').click();
  }
  
  cancelPurchase(){
    cy.get('[data-test="cancel"]').click();
  }

  purchaseCompleteAssertion(expectedText) {
    cy.get(".complete-header").should("have.text", expectedText);
  }
}

export default CheckoutPage;
