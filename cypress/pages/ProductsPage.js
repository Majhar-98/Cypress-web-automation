class ProductsPage {

  productDashboard() {
    cy.get(".title").should("have.text", "Products");
  }

  viewProduct() {
    cy.get("#item_0_title_link > .inventory_item_name").click();
  }

  productDetailsPageAndAddToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }
  
  goToCart() {
    cy.get(".shopping_cart_link").click();
  }
}

export default ProductsPage;
