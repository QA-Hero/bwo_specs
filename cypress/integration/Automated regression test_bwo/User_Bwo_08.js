/// <reference types="cypress" />

describe('us_bwo_08 campaign 2',function()
     {
         it('Envoi message client CDT_bwo-61 ',function()
         {
            /// Ticket BWO-61/CA1

/// CA 1: Freelance connection (passant)

/// Given un client souhaite souhaite un msg à un freelance dont il est en contact ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il renseigne son adresse email
/// And il renseigne son MDP
/// And il clique sur le bouton "valider"
/// And clique sur le lien "Messages"
/// And clique sur les messages du freelance en question
/// And rédige son message dans le champs "Composez votre message"
/// And clique sur le bouton "Envoyer"
/// Then le message est envoyé au freelance
/// And il apparait dans le fil de discussion

              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
              
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
              cy.get('.email').type('m.safi05@gmail.com').should('have.value','m.safi05@gmail.com');

              cy.get('.password').type('Laguna1993').should('have.value','Laguna1993');
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.my-profile > div.profile-head-content > div > div > div.right').should('be.visible').and('contain','Safi Mouhamad');

              /// Étape envoi message à un freelance

              cy.get('body > div.browse-top-menu > div.browse-top-menu-right > a').click();
              cy.wait(500)
              cy.get('body > div.conversations-page > div.left-list > div.left-list-items > div:nth-child(4) > div > div.last-message-preview').click();
              cy.get('textarea').type('Je vous propose une mission à 3500€/jour').should('have.value','Je vous propose une mission à 3500€/jour');
              cy.get('body > div.conversations-page > div.selected-conversation > div.input-box > form > button').click({force:true});
              cy.wait(500);
              cy.get('.messages').should('contain','Je vous propose une mission à 3500€/jour');




        })

    }      

    )