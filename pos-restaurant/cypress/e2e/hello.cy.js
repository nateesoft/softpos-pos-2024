describe('Homepage', () => {
  it('should load and display welcome text', () => {
    cy.visit('/')
    cy.contains('Welcome') // หรือข้อความในหน้า home
  })
})
