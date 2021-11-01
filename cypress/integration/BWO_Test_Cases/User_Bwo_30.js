/// <reference types="cypress" />

describe('us_bwo_030 campaign 2',function()
     {
         it('Connection Freelance CDT_bwo-75 ',function()
         {
            /// Ticket BWO-75/CA1

/// CA 1: Freelance connection (passant)

/// Given un freelance souhaite se sur son compte Birds-Worker ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il renseigne son adresse email
/// And il renseigne son MDP
/// And il clique sur le bouton "valider"
/// Then il est connecté et la page de son profil s'affiche

              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
              
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
              cy.get('.email').type('dbenchetrit5@gmail.com').should('have.value','dbenchetrit5@gmail.com');

              cy.get('.password').type('Avensis').should('have.value','Avensis');
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.my-profile > div.profile-head-content > div > div > div.right').should('be.visible').and('contain','Mickael Owen');


        })

        it('Connection Freelance CDT_bwo-76 ',function()
         {
            /// Ticket BWO-76/CA2

/// CA 2: Freelance connection, MDT manquant (Non-passant)

/// Given un freelance souhaite se sur son compte Birds-Worker ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il renseigne son adresse email
/// And il laisse le champs MDP libre
/// And il clique sur le bouton "valider"
/// Then un pop up s'affiche avec le message "Veuillez saisir votre mot de passe" 

              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
              
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
              cy.get('.email').type('dbenchetrit5@gmail.com').should('have.value','dbenchetrit5@gmail.com');

              cy.get('.password').clear()
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div').should('be.visible').and('contain','Veuillez saisir votre mot de passe');


        })

        it('Connection Freelance CDT_bwo-77',function()
         {
            /// Ticket BWO-77/CA3

/// CA 3: Freelance connection, Email@ manquant (Non-passant)

/// Given un freelance souhaite se sur son compte Birds-Worker ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il laisse le champs email@ libre
/// And il renseigne son MDP
/// And il clique sur le bouton "valider"
/// Then un pop up s'affiche avec le message "Veuillez saisir votre email" 

              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
              
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
              cy.get('.email').clear();

              cy.get('.password').type('Avensis').should('have.value','Avensis')
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div').should('be.visible').and('contain','Veuillez saisir votre email');


        })

        it('Connection Freelance CDT_bwo-78 ',function()
         {
            /// Ticket BWO-78/CA4

/// CA 4: Freelance connection, en laissant les champs Email@ et MPD libres(Non-passant)

/// Given un freelance souhaite se sur son compte Birds-Worker ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il laisse libre le champs Email@
/// And il laisse libre le champs MDP
/// And il clique sur le bouton "valider"
/// Then un pop up s'affiche avec le message "Veuillez saisir votre email" 

              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
              
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
              cy.get('.email').clear()

              cy.get('.password').clear()
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div').should('be.visible').and('contain','Veuillez saisir votre email');



        })

        it('Connection Freelance CDT_bwo-136 ',function()
         {
            /// Ticket BWO-136/CA5

/// CA 5: Freelance connection, Email@ format invalide(Non-passant)

/// Given un freelance souhaite se sur son compte Birds-Worker ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il renseigne son adresse email avec un format invalide
/// And il renseigne son MDP
/// And il clique sur le bouton "valider"
/// Then un pop up s'affiche avec le message "Votre addresse email doit etre valide" 

              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
              
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
              cy.get('.email').type('format@gmail').should('have.value','format@gmail')

              cy.get('.password').type('Avensis').should('have.value','Avensis')
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div').should('be.visible').and('contain','Votre addresse email doit etre valide');



        })

        it('Connection Freelance CDT_bwo-137 ',function()
         {
            /// Ticket BWO-137/CA6

/// CA 6: Freelance connection, MDP invalide(Non-passant)

/// Given un freelance souhaite se sur son compte Birds-Worker ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il renseigne son adresse email 
/// And il renseigne un MDP invalide
/// And il clique sur le bouton "valider"
/// Then un pop up s'affiche avec le message "Informations de login incorrectes" 

              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
              
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
              cy.get('.email').type('dbenchetrit5@gmail.com').should('have.value','dbenchetrit5@gmail.com')

              cy.get('.password').type('Avensis789').should('have.value','Avensis789')
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div').should('be.visible').and('contain','Informations de login incorrectes');



        })



}      

)  