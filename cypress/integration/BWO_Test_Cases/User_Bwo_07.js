/// <reference types="cypress" />

describe('us_bwo_021 campaign 2',function()
     {
         it('Deconnection CDT_bwo-303 ',function()
         {
            /// Ticket BWO-303/CA1

/// CA 1: Deconnexion Freelance (passant)

/// Given un freelance souhaite se deconnecter de son compte ('https://staging.birds-worker.com')
/// When le freelance se trouve sur son profil
/// And il clique sur la flêche en haut à droite du header
/// And il click sur le lien de deconnection
/// Then il est deconnecté de son compte and redirigé vers la page de connection
        

              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()

              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
              cy.get('.email').type('dbenchetrit5@gmail.com').should('have.value','dbenchetrit5@gmail.com');

             
              cy.get('.password').type('Avensis').should('have.value','Avensis');
              cy.get('body > div.login-page > div > div:nth-child(5) > div').click();

              cy.wait(500);

              cy.url().should('includes','staging.birds-worker.com/my-profile')

              cy.wait(500);

              cy.get('body > div.browse-top-menu > div.browse-top-menu-right > div > div.dropdown > a:nth-child(2)').click({force:true})
              cy.get('.login-page-form').should('be.visible');


        
        })  
        it('Deconnection CDT_bwo-304 ',function()
         {
            /// Ticket BWO-304/CA2

/// CA 2: Deconnexion Client (passant)

/// Given un Client souhaite se deconnecter de son compte ('https://staging.birds-worker.com')
/// When le client se trouve sur son profil
/// And il clique sur la flêche en haut à droite du header
/// And il click sur le lien de deconnection
/// Then il est deconnecté de son compte and redirigé vers la page de connection
        

              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()

              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
              cy.get('.email').type('m.safi05@gmail.com').should('have.value','m.safi05@gmail.com');

              
              cy.get('.password').type('Laguna1993').should('have.value','Laguna1993');
              cy.get('body > div.login-page > div > div:nth-child(5) > div').click();

              cy.wait(500);

              cy.url().should('includes','staging.birds-worker.com/my-profile')

              cy.wait(500);

              cy.get('body > div.browse-top-menu > div.browse-top-menu-right > div > div.dropdown > a:nth-child(2)').click({force:true})
              cy.get('.login-page-form').should('be.visible');


        
        })  



    }      
    
    )