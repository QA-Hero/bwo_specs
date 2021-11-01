/// <reference types="cypress" />
describe('Location Elements',function()
    {

        /// US_Connexion URL
    
       it('Connexion site birds-worker',function()
       {
        cy.visit('https://staging.birds-worker.com/');
        cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
        cy.wait(500);
        cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
        cy.get('.email').type('superman78@gmail.com').should('have.value','superman78@gmail.com');/// check password value is displayed

        cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe')/// placeholder name verification
        cy.get('.password').type('Marseille78').should('have.value','Marseille78');/// check password value is displayed
   

        cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
        cy.get('.passwordVerification').type('Marseille78').should('have.value','Marseille78')/// check password value is displayed
     

        cy.get('.cgu').check()
        cy.get('.button').click()

        cy.wait(500)

        cy.get('[data-type="client"]').click();
        cy.get('.firstname').clear();
        cy.get('.lastname').type('Ferrari');
        cy.get('.cgu').check();
        cy.get('.next-step-button-container > .button').click();
        cy.wait(500)
        cy.get('body > div.app-popup-container.app-popup--show > div').should('be.visible');

     })

    




    
           

        


    


            

            



        



       
        
}      

)





      
       
       
