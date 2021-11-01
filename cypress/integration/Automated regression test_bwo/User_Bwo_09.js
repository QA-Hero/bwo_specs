/// <reference types="cypress" />
describe('us_bwo_9 campaign 2',function()
    {

    
       it('Inscription client end-to-end CDT_bwo-33 ',function()
       {

/// Ticket BWO-33/CA1

/// CA 1: Inscription du client (passant)

/// Given un client souhaite s'inscrire sur le site ('https://staging.birds-worker.com')
/// When le client clique sur le bouton "Inscription" sur le header
/// And il renseigne son email
/// And il renseigne son mot de passe avec au moins 6 caractères
/// And il renseigne le champs de confirmation du MDP 
/// And il accepte les CGU
/// And il clique sur le bouton "suivant"
/// And il choisit l'option "Client"
/// And il renseigne le prénom
/// And il renseigne le nom
/// And il accepte les conditions d'utilisation
/// And il clique sur le bouton "valider"
/// And il renseigne sa localisation (sa ville)
/// And il renseigne sa présentation
/// And il clique sur le bouton "valider"
/// Then il devient client de Birds worker

           cy.visit('https://staging.birds-worker.com/');
           cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
           cy.wait(500);
           cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
           cy.get('.email').type('marseille000@gmail.com').should('have.value','marseille000@gmail.com');/// check password value is displayed
            
        

           cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe')/// placeholder name verification
           cy.get('.password').type('paris75').should('have.value','paris75');/// check password value is displayed
      

           cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
           cy.get('.passwordVerification').type('paris75').should('have.value','paris75')/// check password value is displayed
        

           cy.get('.cgu').check()
           cy.get('.button').click()

           cy.wait(500)

           cy.get('[data-type="client"]').click();
           cy.get('.firstname').type('Alfonso');
           cy.get('.lastname').type('Ferrari');
           cy.get('.cgu').check();
           cy.get('.next-step-button-container > .button').click();

           ///Locator de vérification de création du compte
           cy.get('.main-infos > .right')

           ///Logout Profil
           cy.get('body > div.browse-top-menu > div.browse-top-menu-right > div > div.dropdown > a:nth-child(2)').click({force:true});


        }) 

        it('Inscription client end-to-end CDT_bwo-35 ',function()

        {

/// BWO-35/CA1

///CA 2: Erreur dans l’inscription car champs Prénom libre (non passant)

/// Given un client souhaite s'inscrire sur le site *  *
/// When le client clique sur le bouton "inscription" sur le header
/// And il renseigne son email
/// And il renseigne son mot de passe avec au moins 6 caractères
/// And il renseigne le champs de confirmation du MDP 
/// And il accepte les conditions d'utilisation
/// And il clique sur le bouton suivant
/// And il choisit l'option "Client"
/// And il laisse le champs "prénom" libre
/// And il renseigne son nom
/// And il clique sur le bouton "valider"
/// Then un message lui indique <Veuillez saisir votre prénom>


           cy.visit('https://staging.birds-worker.com/');
           cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
           cy.wait(500);
           cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
           cy.get('.email').type('marseille999@gmail.com').should('have.value','marseille999@gmail.com');/// check password value is displayed

           cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe')/// placeholder name verification
           cy.get('.password').type('Marseille75').should('have.value','Marseille75');/// check password value is displayed
      

           cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
           cy.get('.passwordVerification').type('Marseille75').should('have.value','Marseille75')/// check password value is displayed
        

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

    
        it('Inscription client end-to-end CDT_bwo-36 ',function()
        {

/// BWO-36/CA1
///CA 3: Erreur dans l’inscription car champs Nom libre (non passant)

/// Given un client souhaite s'inscrire sur le site *  *
/// When le client clique sur le bouton "inscription" sur le header
/// And il renseigne son email
/// And il renseigne son mot de passe avec au moins 6 caractères
/// And il renseigne le champs de confirmation du MDP 
/// And il accepte les CGU
/// And il clique sur le bouton "suivant"
/// And il choisit l'option "Client"
/// And il renseigne son prénom
/// And il laisse libre le champs Nom
/// And clique sur le bouton "suivant"
/// Then un message lui indique <Veuillez saisir votre nom>

            cy.visit('https://staging.birds-worker.com/');
            cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
            cy.wait(500);
            cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
            cy.get('.email').type('marseille759@gmail.com').should('have.value','marseille759@gmail.com');/// check password value is displayed
 
            cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe')/// placeholder name verification
            cy.get('.password').type('Marseille75').should('have.value','Marseille75');/// check password value is displayed
       
 
            cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
            cy.get('.passwordVerification').type('Marseille75').should('have.value','Marseille75')/// check password value is displayed
         
 
            cy.get('.cgu').check()
            cy.get('.button').click()
 
            cy.wait(500)
 
            cy.get('[data-type="client"]').click();
            cy.get('.firstname').type('Joey')
            cy.get('.lastname').clear();
            cy.get('.cgu').check();
            cy.get('.next-step-button-container > .button').click();
            cy.wait(500)
            cy.get('body > div.app-popup-container.app-popup--show > div').should('be.visible');

        })

    

    
        it('Inscription client end-to-end CDT_bwo-37 ',function()
        {

/// BWO-37/CA1

///CA 4: Erreur dans l’inscription Email non conforme (non passant)

/// Given un client souhaite s'inscrire sur le site *  *
/// When le client clique sur le bouton "inscription" sur le header
/// And il renseigne un email non conforme
/// And il renseigne son MDP avec au moins 6 caractères
/// And il renseigne le champs de confirmation du MDP 
/// And il accepte les CGU
/// And clique sur le bouton "suivant"
/// Then un message lui indique <Veuillez renseigner une adresse e-mail valide>

           cy.visit('https://staging.birds-worker.com/');
           cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
           cy.wait(500);
           cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
           cy.get('.email').type('test15gmail.com').should('have.value','test15gmail.com');/// check password value is displayed

           cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe')/// placeholder name verification
           cy.get('.password').type('Marseille78').should('have.value','Marseille78');/// check password value is displayed
      

           cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
           cy.get('.passwordVerification').type('Marseille78').should('have.value','Marseille78')/// check password value is displayed
        

           cy.get('.cgu').check()
           cy.get('.button').click()

           cy.wait(500)
           cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content').should('be.visible');

           
        }) 

        it('Inscription client end-to-end CDT_bwo-38 ',function()
        {

/// BWO-38/CA1

///CA 5: Erreur dans l’inscription MDP trop court (non passant)

/// Given un client souhaite s'inscrire sur le site *  *
/// When le client clique sur le bouton "inscription" sur le header
/// And il renseigne son email
/// And il renseigne un MDP de moins de 6 caractères
/// And il renseigne le champs de confirmation du MDP 
/// And il accepte les CGU
/// And clique sur le bouton "suivant"
/// Then un message lui indique <votre mot de passe est trop court>


           cy.visit('https://staging.birds-worker.com/');
           cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
           cy.wait(500);
           cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
           cy.get('.email').type('test1500gmail.com').should('have.value','test1500gmail.com');/// check password value is displayed

           cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe');/// placeholder name verification
           cy.get('.password').type('1234').should('have.value','1234');/// check password value is displayed
      

           cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
           cy.get('.passwordVerification').type('1234').should('have.value','1234');/// check password value is displayed
        

           cy.get('.cgu').check();
           cy.get('.button').click();

           cy.wait(500);
           cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content').should('be.visible');

           
        }) 

        it('Inscription client end-to-end CDT_bwo-39 ',function()
        {

/// BWO-39/CA1

///CA 6: Erreur dans l’inscription Email non conforme (non passant)

/// Given un client souhaite s'inscrire sur le site *  *
/// When le client clique sur le bouton "inscription" sur le header
/// And il renseigne une adresse email déjà utilisée dans le site
/// And il renseigne un MDP de + de 6 caractères
/// And il renseigne le champs de confirmation du MDP 
/// And il accepte les CGU
/// And clique sur le bouton "suivant"
///Then un message lui indique <Veuillez renseigner une adresse e-mail valide>

           cy.visit('https://staging.birds-worker.com/');
           cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
           cy.wait(500);
           cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
           cy.get('.email').type('dbenchetrit5@gmail.com').should('have.value','dbenchetrit5@gmail.com');/// check password value is displayed

           cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe');/// placeholder name verification
           cy.get('.password').type('Marseille78').should('have.value','Marseille78');/// check password value is displayed
      

           cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
           cy.get('.passwordVerification').type('Marseille78').should('have.value','Marseille78');/// check password value is displayed
        

           cy.get('.cgu').check();
           cy.get('.button').click();

           cy.wait(500);
           cy.get('[style="padding-top: 20px 20px;"]').should('be.visible');

           
        }) 

        





        


           








        





    

          


       
       
       

    }      
    
)


