import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import CheckoutPage from "../pages/CheckoutPage";

describe("Product purchase", () => {
  const loginPage = new LoginPage();
  const productPage = new ProductsPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    cy.viewport(1920, 1080);
    loginPage.login("standard_user", "secret_sauce");
  });

  it("verify product purchase is successful", () => {
    productPage.productDashboard();
    productPage.viewProduct();
    productPage.productDetailsPageAndAddToCart();
    productPage.goToCart();
    checkoutPage.checkout();
    checkoutPage.addUserInfo("Pollab", "Ahmed", "1234");
    checkoutPage.finishPurchase();
    checkoutPage.purchaseCompleteAssertion("Thank you for your order!");
  });

  it("verify product purchase is cancelled", () => {
    productPage.productDashboard();
    productPage.viewProduct();
    productPage.productDetailsPageAndAddToCart();
    productPage.goToCart();
    checkoutPage.checkout();
    checkoutPage.addUserInfo("Pollab", "Ahmed", "1234");
    checkoutPage.cancelPurchase();
    productPage.productDashboard();
  });
});
