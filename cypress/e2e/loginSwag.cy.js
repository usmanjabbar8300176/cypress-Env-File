
const firstuser = Cypress.env("loginWithFirstUser")
const secondUser = Cypress.env("loginWithSecondUser")
const thirdUser = Cypress.env("loginWithThirdUser")

describe('template spec', () => {
    beforeEach('visit site', () => {
        cy.visit('/')
    })

    it('login with first user', () => {
        cy.login(firstuser)
    })

    it('login with second user', () => {
        cy.login(secondUser)
    })

    it('login with third user', () => {
        cy.login(thirdUser)

    })


})
