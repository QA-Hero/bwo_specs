/// <reference types="cypress" />

describe('us_bwo_023 campaign 2',function()
     {
         it('Fake search CDT_bwo-68 ',function()
         {
            /// Ticket BWO-303/CA1

/// CA 1: Search Faker (passant)

/// Given un freelance souhaite se deconnecter de son compte ('https://staging.birds-worker.com')
/// When le freelance se trouve sur son profil
/// And il clique sur la flêche en haut à droite du header
/// And il click sur le lien de deconnection
/// Then il est deconnecté de son compte and redirigé vers la page de connection
        

              cy.visit('https://staging.birds-worker.com/');
              cy.get('.fake-search').should('be.visible');

              
        })  
        
        



    }      
    
    )