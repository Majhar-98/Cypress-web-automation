import LoginPage from "../pages/LoginPage";

describe("Login suite", () => {
    const loginPage = new LoginPage();

    it("Testing with valid credentials", () => {
        loginPage.userLogin("standard_user", "secret_sauce");
    })

    it("Testing with invalid credentials", () => {
        loginPage.userLogin("standarduser", "secret_sauce");
        loginPage.invalidAssertion();
    })

    it("locked_out_user", () => {
        loginPage.login("locked_out_user", "secret_sauce").should("Sorry, this user has been locked out.");
    })

    it("problem_user", () => {
        loginPage.login("problem_user", "secret_sauce");
    })

    it("performance_glitch_user", () => {
        loginPage.login("performance_glitch_user", "secret_sauce");
    })
})