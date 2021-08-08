describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Home Jumbotron')
  })

  it('Visits the Rules project page', () => {
    cy.visit('/rules')
    cy.contains('Rule Jumbotron')
  })

  it('Clicking on the Add Button adds a Rule', () => {
    cy.visit('/rules')

    cy.get('#rulesAddButton').click()
    cy.contains("New Rule")
    cy.get("#ruleExecutionCounter").then((element) => {
      assert.equal(Number(element.text()), 0)
    })

    cy.get('#ruleName').type('My First Rule')
    cy.get('#ruleEditSubmitButton').click()
    cy.get('.nav-link').contains('My First Rule')

    cy.get("#ruleExecutionCounter").then((element) => {
      const expected = Number(element.text()) + 1
      cy.get('#ruleExecutionButton').click()
      cy.get("#ruleExecutionCounter").then((element) => {
        assert.equal(Number(element.text()), expected)
      })
    })
  })
})
