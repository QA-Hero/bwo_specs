/// <reference types="cypress" />

describe('us_bwo_031 campaign 2',function()
     {
         it('Connection Client CDT_bwo-81 ',function()
         {
            /// Ticket BWO-81/CA1

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
              cy.get('.email').type('m.safi05@gmail.com').should('have.value','m.safi05@gmail.com');

              cy.get('.password').type('Laguna1993').should('have.value','Laguna1993');
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.my-profile > div.profile-head-content > div > div > div.right').should('be.visible').and('contain','Safi Mouhamad');


        })

        it('Connection Freelance CDT_bwo-84 ',function()
         {
            /// Ticket BWO-84/CA2

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
              cy.get('.email').type('m.safi05@gmail.com').should('have.value','m.safi05@gmail.com');

              cy.get('.password').clear()
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div').should('be.visible').and('contain','Veuillez saisir votre mot de passe');


        })

        it('Connection Freelance CDT_bwo-85',function()
         {
            /// Ticket BWO-85/CA3

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

              cy.get('.password').type('Laguna1993').should('have.value','Laguna1993')
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div').should('be.visible').and('contain','Veuillez saisir votre email');


        })

        it('Connection Freelance CDT_bwo-87 ',function()
         {
            /// Ticket BWO-87/CA4

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

        it('Connection Freelance CDT_bwo-138 ',function()
         {
            /// Ticket BWO-138/CA5

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

              cy.get('.password').type('Laguna1993').should('have.value','Laguna1993')
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div').should('be.visible').and('contain','Votre addresse email doit etre valide');



        })

        it('Connection Freelance CDT_bwo-139 ',function()
         {
            /// Ticket BWO-139/CA6

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
              cy.get('.email').type('m.safi05@gmail.com').should('have.value','m.safi05@gmail.com')

              cy.get('.password').type('Laguna199389').should('have.value','Laguna199389')
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div').should('be.visible').and('contain','Informations de login incorrectes');



        })



}      

)  