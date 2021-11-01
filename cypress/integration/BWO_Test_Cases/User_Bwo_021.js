/// <reference types="cypress" />

const { it } = require("mocha");

describe('us_bwo_021 campaign 2',function()
     {
         it('Inscription freelance end-to-end CDT_bwo-34 ',function()
         {
            /// Ticket BWO-34/CA1

/// CA 1: Inscription du Freelance (passant)

/// Given un freelance souhaite s'inscrire sur le site ('https://staging.birds-worker.com')
/// When le freelance clique sur l'icône d'inscription sur le header
/// And il renseigne le mail
/// And il renseigne le mot de passe avec au moins 6 caractères
/// And il renseigne le champs de confirmation du MDP 
/// And il accepte les conditions d'utilisation
/// And il clique sur le bouton continuer
/// And il choisit l'option "Freelance"
/// And il renseigne son prénom 
/// And il renseigne son nom
/// And il accepte les conditions d'utilisationThen le client valide
/// And il clique sur le bouton valider
/// And il renseigne l'intitulé de son métier
/// And il rensigne son tarif journalier
/// And il clique sur enregistrer
/// Then il est enregistré comme freelancer chez Birds worker
        

              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
              cy.wait(500);
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
              cy.get('.email').type('psg750111@gmail.com').should('have.value','psg750111@gmail.com');/// check password value is displayed
            
        

              cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe')/// placeholder name verification
              cy.get('.password').type('paris75000').should('have.value','paris75000');/// check password value is displayed
      

              cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
              cy.get('.passwordVerification').type('paris75000').should('have.value','paris75000')/// check password value is displayed
        

              cy.get('.cgu').check()
              cy.get('.button').click()

              cy.wait(500)

              cy.get('[data-type="freelance"]').click();
              cy.get('.firstname').type('Michael').should('have.value','Michael')
              cy.get('.lastname').type('Jackson').should('have.value','Jackson')
              cy.get('.cgu').check();
              cy.get('.next-step-button-container > .button').click();
              cy.wait(500)

              ///Editer mon profil
          

              cy.get(':nth-child(4) > .headline').invoke('attr', 'placeholder').should('contain', 'Exemple: Graphiste, Coach Agile')
              cy.get(':nth-child(4) > .headline').type('PO').should('have.value','PO');

              cy.get(':nth-child(5) > .price').invoke('attr', 'placeholder').should('contain','Ex: 350')
              cy.get(':nth-child(5) > .price').type('556').should('have.value','556');
              cy.get('[style="text-align:right;"] > .button').click();


              ///Locator de vérification de création du compte
              cy.get('.main-infos > .right').should('be.visible');///Nom du freelance

              ///Logout Profil
              cy.get('body > div.browse-top-menu > div.browse-top-menu-right > div > div.dropdown > a:nth-child(2)').click({force:true});
         


            })
         
            it('Inscription Freelance end-to-end CDT_bwo-40 ',function()

            
            {

                /// Ticket BWO-40/CA2

/// CA 2: Erreur dans l’inscription car champ prénom vide (non-passant)

/// Given un freelance souhaite s'inscrire sur le site ('https://staging.birds-worker.com')
/// When le freelance clique sur l'icône d'inscription sur le header
/// And il renseigne le mail
/// And il renseigne le mot de passe avec au moins 6 caractères
/// And il renseigne le champs de confirmation du MDP 
/// And il accepte les conditions d'utilisation
/// And il clique sur le bouton continuer
/// And il choisit l'option "Freelance"
/// And il laisse champs "prénom" vide
/// And il renseigne son nom
/// And il accepte les conditions d'utilisationThen le client valide
/// And il clique sur le bouton valider
/// Then un message lui indique <veuillez saisir votre prénom>      
              
              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
              cy.wait(500);
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
              cy.get('.email').type('psg7501211@gmail.com').should('have.value','psg7501211@gmail.com');/// check password value is displayed

              cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe')/// placeholder name verification
              cy.get('.password').type('Marseille75').should('have.value','Marseille75');/// check password value is displayed


              cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
              cy.get('.passwordVerification').type('Marseille75').should('have.value','Marseille75')/// check password value is displayed


              cy.get('.cgu').check()
              cy.get('.button').click()
 
              cy.wait(500)

              cy.get('[data-type="freelance"]').click();
              cy.get('.firstname').clear();
              cy.get('.lastname').type('Boxer').should('have.value','Boxer')
              cy.get('.cgu').check();
              cy.get('.next-step-button-container > .button').click();
              cy.wait(500)
              cy.get('body > div.app-popup-container.app-popup--show > div').should('be.visible');
            
        

        })

        it('Inscription Freelance end-to-end CDT_bwo-41 ',function()

            
        {

            /// Ticket BWO-41/CA3

/// CA 3: Erreur dans l’inscription car champs Nom vide (non-passant)

/// Given un freelance souhaite s'inscrire sur le site ('https://staging.birds-worker.com')
/// When le freelance clique sur l'icône d'inscription sur le header
/// And il renseigne le mail
/// And il renseigne le mot de passe avec au moins 6 caractères
/// And il renseigne le champs de confirmation du MDP 
/// And il accepte les conditions d'utilisation
/// And il clique sur le bouton continuer
/// And il choisit l'option "Freelance"
/// And il renseigne son prénom
/// And il laisse le champs Nom libre
/// And il accepte les conditions d'utilisationThen le client valide
/// And il clique sur le bouton valider
/// Then un message lui indique <veuillez saisir votre Nom>      
          
              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
              cy.wait(500);
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
              cy.get('.email').type('psg7501311@gmail.com').should('have.value','psg7501311@gmail.com');/// check password value is displayed

              cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe')/// placeholder name verification
              cy.get('.password').type('Marseille75').should('have.value','Marseille75');/// check password value is displayed


              cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
              cy.get('.passwordVerification').type('Marseille75').should('have.value','Marseille75')/// check password value is displayed


              cy.get('.cgu').check()
              cy.get('.button').click()
 
              cy.wait(500)

              cy.get('[data-type="freelance"]').click();
              cy.get('.firstname').type('ISTQB').should('have.value','ISTQB')
              cy.get('.lastname').clear()
              cy.get('.cgu').check();
              cy.get('.next-step-button-container > .button').click();
              cy.wait(500)
              cy.get('body > div.app-popup-container.app-popup--show > div').should('be.visible')
            

        })

        it('Inscription Freelance end-to-end CDT_bwo-42 ',function()
            
        {

            /// Ticket BWO-42/CA4

/// CA 4: Erreur dans l’inscription car Email@ non conforme (non-passant)

/// Given un freelance souhaite s'inscrire sur le site ('https://staging.birds-worker.com')
/// When le freelance clique sur l'icône d'inscription sur le header
/// And il renseigne un email au format non conforme(w/o @)
/// And il renseigne le mot de passe avec au moins 6 caractères
/// And il renseigne le champs de confirmation du MDP 
/// And il accepte les conditions d'utilisation
/// And il clique sur le bouton continuer
/// Then un message lui indique <Veuillez renseigner une adresse e-mail valide>      
          
              cy.visit('https://staging.birds-worker.com/');
              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
              cy.wait(500);
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
              cy.get('.email').type('mar78.com').should('have.value','mar78.com');/// check password value is displayed

              cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe')/// placeholder name verification
              cy.get('.password').type('Marseille75').should('have.value','Marseille75');/// check password value is displayed


              cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
              cy.get('.passwordVerification').type('Marseille75').should('have.value','Marseille75')/// check password value is displayed


              cy.get('.cgu').check()
              cy.get('.button').click()
 
              cy.wait(500)
              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content').should('be.visible');
            

        })

        it('Inscription Freelance end-to-end CDT_bwo-43 ',function()
            
        {
            /// Ticket BWO-43/CA5

/// CA 5: Erreur dans l’inscription car MDP moins de 6 caractères (non-passant)

/// Given un freelance souhaite s'inscrire sur le site ('https://staging.birds-worker.com')
/// When le freelance clique sur l'icône d'inscription sur le header
/// And il renseigne son adresse email
/// And il renseigne un mot de passe de moins de 6 caractères
/// And il renseigne le champs de confirmation du MDP 
/// And il accepte les conditions d'utilisation
/// And il clique sur le bouton continuer
/// Then un message lui indique <votre mot de passe est trop court>      
          
              cy.visit('https://staging.birds-worker.com/');
              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
              cy.wait(500);
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
              cy.get('.email').type('psg7501411@gmail.com').should('have.value','psg7501411@gmail.com');/// check password value is displayed

              cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe')/// placeholder name verification
              cy.get('.password').type('1234').should('have.value','1234');/// check password value is displayed


              cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
              cy.get('.passwordVerification').type('1234').should('have.value','1234')/// check password value is displayed


              cy.get('.cgu').check()
              cy.get('.button').click()
 
              cy.wait(500)
              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content').should('be.visible');

            })


            it('Inscription Freelance end-to-end CDT_bwo-44 ',function()
           
        {
            /// Ticket BWO-44/CA6

/// CA 6: Mot de passe déjà existant (non-passant)

/// Given un freelance souhaite s'inscrire sur le site ('https://staging.birds-worker.com')
/// When le freelance clique sur l'icône d'inscription sur le header
/// And il renseigne son adresse email
/// And il renseigne un mot de passe de moins de 6 caractères
/// And il renseigne le champs de confirmation du MDP 
/// And il accepte les conditions d'utilisation
/// And il clique sur le bouton continuer
/// Then un message lui indique <votre mot de passe est trop court>      
          
              cy.visit('https://staging.birds-worker.com/');
              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(1)').click();
              cy.wait(500);
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@adresse.com');/// placeholder name verification
              cy.get('.email').type('psg7501@gmail.com').should('have.value','psg7501@gmail.com');/// check password value is displayed

              cy.get('.password').invoke('attr', 'placeholder').should('contain', 'Mot de passe')/// placeholder name verification
              cy.get('.password').type('Marseille75').should('have.value','Marseille75');/// check password value is displayed


              cy.get('.passwordVerification').invoke('attr', 'placeholder').should('contain', 'Confirmation du mot de passe');/// placeholder name verification
              cy.get('.passwordVerification').type('Marseille75').should('have.value','Marseille75')/// check password value is displayed


              cy.get('.cgu').check()
              cy.get('.button').click()
 
              cy.wait(500)
              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content').should('be.visible');

            })


           

        


    


            

            



        



       
        
    }      
    
)



          

        
    

