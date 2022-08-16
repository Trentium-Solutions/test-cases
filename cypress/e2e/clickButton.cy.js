describe('click', () => {
  it('user can click on button', () => {
    cy.visit('localhost:3000/')
    cy.findByRole('button', {name: /click/i}).click()
  })
})
