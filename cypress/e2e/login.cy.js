describe('template spec', () => {
  
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[placeholder="Username"]').type('Admin')
    cy.get('[placeholder="Password"]').type('admin123')
    cy.get('.oxd-form-actions.orangehrm-login-action').click()
    cy.get('.oxd-topbar-header-breadcrumb').should('have.text', 'Dashboard')

  })
})