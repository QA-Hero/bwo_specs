
describe('file upload test',()=>{
    it('file upload test',()=>{
        
        cy.visit('https://staging.birds-worker.com/')
        cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
        cy.get('.email').type('dbenchetrit5@gmail.com');
        cy.get('.password').type('Avensis');
        cy.get('.button-primary').click()
        cy.get('.browse-top-menu-right > [href="/conversations"]').click()

        it('File Upload using cypress-file-upload npm package', () => {
            const filepath = 'fixtures/images/pig.png'
            cy.get('input[type="file"]').attachFile(filepath)
            cy.get('.send-file-button').click()
            cy.get('#uploaded-files').contains('pig.png')
        })

        cy.get('textarea').type('petit fichier attaché').should('have.value','petit fichier attaché');

       
        cy.get('.input-box-right > .button').click();

    })    

})