/// <reference types="cypress" />

describe('us_bwo_10 campaign 2',function()
     {
        it('Éditer prénom profil freelance CDT_bwo-46 ',function()
        {
           /// Ticket BWO-46/CA1

/// CA 1: Éditer le prénom dans profil freelance (passant)

/// Modification du Prénom_ Editer mon profil _Freelance (passant) ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il renseigne son adresse email
/// And il renseigne son MDP
/// And il clique sur le bouton "valider"
/// And clique sur le bouton "profil"
/// And clique il éfface le prénom actuel dans le champs prénom
/// And il renseigne un nouveau prénom
/// And il clique sur enregistrer
/// Then le nouveau prénom est enregistré dans le profil freelance

             cy.visit('https://staging.birds-worker.com/');
             cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
             
             cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
             cy.get('.email').type('karim.benzema@yahoo.com').should('have.value','karim.benzema@yahoo.com');

             cy.get('.password').type('realmadrid').should('have.value','realmadrid');
             cy.get('.button-primary').click()
             cy.wait(500);

             cy.get('body > div.my-profile > div.profile-head-content > div > div > div.edit-headline.button.button-primary-inverse').click();
             cy.wait(500);
             cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-header > div').should('contain','Editer mon profil');
             
             cy.get('.firstname').clear().type('Roberto').and('have.value','Roberto');
             cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div:nth-child(7) > button').click()
             cy.wait(300);
             cy.get('body > div.my-profile > div.profile-head-content > div > div > div.right').should('contain','Roberto');

             cy.get('body > div.browse-top-menu > div.browse-top-menu-right > div > div.dropdown > a:nth-child(2)').click({force:true})

           })

           it('Éditer nom profil freelance CDT_bwo-51 ',function()
        {
           /// Ticket BWO-51/CA2

/// CA 2: Éditer le Nom dans profil freelance (passant)

/// Modification du Nom_ Editer mon profil _Freelance (passant) ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il renseigne son adresse email
/// And il renseigne son MDP
/// And il clique sur le bouton "valider"
/// And clique sur le bouton "profil"
/// And il éfface le nom actuel dans le champs nom
/// And il renseigne un nouveau nom
/// And il clique sur enregistrer
/// Then le nouveau prénom est enregistré dans le profil freelance

             cy.visit('https://staging.birds-worker.com/');
             cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
             
             cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
             cy.get('.email').type('karim.benzema@yahoo.com').should('have.value','karim.benzema@yahoo.com');

             cy.get('.password').type('realmadrid').should('have.value','realmadrid');
             cy.get('.button-primary').click()
             cy.wait(500);

             cy.get('body > div.my-profile > div.profile-head-content > div > div > div.edit-headline.button.button-primary-inverse').click();
             cy.wait(500);
             cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-header > div').should('contain','Editer mon profil');
             
             cy.get('.lastname').clear().type('Carlos').and('have.value','Carlos');
             cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div:nth-child(7) > button').click()
             cy.wait(300);
             cy.get('body > div.my-profile > div.profile-head-content > div > div > div.right').should('contain','Carlos');

             cy.get('body > div.browse-top-menu > div.browse-top-menu-right > div > div.dropdown > a:nth-child(2)').click({force:true})

           })

           it('Éditer Intitulé profil freelance CDT_bwo-52 ',function()
           {
              /// Ticket BWO-52/CA3
  
  /// CA 3: Éditer l'intitulé dans le profil freelance (passant)
  
  /// Modification de l'Intitulé_ Editer mon profil _Freelance (passant) ('https://staging.birds-worker.com')
  /// When il clique sur le bouton "connexion" sur le header de la home page
  /// And il renseigne son adresse email
  /// And il renseigne son MDP
  /// And il clique sur le bouton "valider"
  /// And clique sur le bouton "profil"
  /// And il éfface l'intitulé' actuel dans le champs Intitulé
  /// And il renseigne un nouveau nom
  /// And il clique sur enregistrer
  /// Then le nouvel intitulé est enregistré dans le profil freelance
  
                cy.visit('https://staging.birds-worker.com/');
                cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
                
                cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
                cy.get('.email').type('karim.benzema@yahoo.com').should('have.value','karim.benzema@yahoo.com');
  
                cy.get('.password').type('realmadrid').should('have.value','realmadrid');
                cy.get('.button-primary').click()
                cy.wait(500);
  
                cy.get('body > div.my-profile > div.profile-head-content > div > div > div.edit-headline.button.button-primary-inverse').click();
                cy.wait(500);
                cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-header > div').should('contain','Editer mon profil');
                
                cy.get(':nth-child(4) > .headline').clear().type('QA Lead').and('have.value','QA Lead');
                cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div:nth-child(7) > button').click()
                cy.wait(300);
                cy.get('body > div.my-profile > div.profile-head-content > div > div > div.right > div.headline').should('contain','QA Lead');
  
                cy.get('body > div.browse-top-menu > div.browse-top-menu-right > div > div.dropdown > a:nth-child(2)').click({force:true})
  
              })

              it('Éditer tjm profil freelance CDT_bwo-55 ',function()
           {
              /// Ticket BWO-55/CA4
  
  /// CA 4: Éditer TJM dans le profil freelance (passant)
  
  /// Modification de TJM_ Editer mon profil _Freelance (passant) ('https://staging.birds-worker.com')
  /// When il clique sur le bouton "connexion" sur le header de la home page
  /// And il renseigne son adresse email
  /// And il renseigne son MDP
  /// And il clique sur le bouton "valider"
  /// And clique sur le bouton "profil"
  /// And il éfface le 'TJM' actuel dans le champs Intitulé
  /// And il renseigne un nouveau TJM
  /// And il clique sur enregistrer
  /// Then le nouveau TJM est enregistré dans le profil freelance
  
                cy.visit('https://staging.birds-worker.com/');
                cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
                
                cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
                cy.get('.email').type('karim.benzema@yahoo.com').should('have.value','karim.benzema@yahoo.com');
  
                cy.get('.password').type('realmadrid').should('have.value','realmadrid');
                cy.get('.button-primary').click()
                cy.wait(500);
  
                cy.get('body > div.my-profile > div.profile-head-content > div > div > div.edit-headline.button.button-primary-inverse').click();
                cy.wait(500);
                cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-header > div').should('contain','Editer mon profil');
                
                cy.get(':nth-child(5) > .price').clear().type('750').and('have.value','750');
                cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div:nth-child(7) > button').click()
                cy.wait(300);
                cy.get('.price').should('contain','750');
  
                cy.get('body > div.browse-top-menu > div.browse-top-menu-right > div > div.dropdown > a:nth-child(2)').click({force:true})
  
              })
  

              it('Éditer profil freelance champs prénom libre CDT_bwo-57 ',function()
        {
           /// Ticket BWO-57/CA5

/// CA 5: Éditer profil freelance champs prénom libre (non-passant)

/// Modification du Prénom_ Editer mon profil _Freelance champs prénom manquant (non-passant) ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il renseigne son adresse email
/// And il renseigne son MDP
/// And il clique sur le bouton "valider"
/// And clique sur le bouton "profil"
/// And clique il éfface le prénom actuel et laisse libre le champs
/// And il clique sur le bouton enregistrer
/// Then un popup s'affiche avec le message suivant : les données saisies ne sont pas conformes

             cy.visit('https://staging.birds-worker.com/');
             cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
             
             cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
             cy.get('.email').type('karim.benzema@yahoo.com').should('have.value','karim.benzema@yahoo.com');

             cy.get('.password').type('realmadrid').should('have.value','realmadrid');
             cy.get('.button-primary').click()
             cy.wait(500);

             cy.get('body > div.my-profile > div.profile-head-content > div > div > div.edit-headline.button.button-primary-inverse').click();
             cy.wait(500);
             cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-header > div').should('contain','Editer mon profil');
             
             cy.get('.firstname').clear()
             cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div:nth-child(7) > button').click({force:true})
             cy.wait(600);
             cy.get('[style="padding-top: 20px 20px;"]').should('contain','les données saisies ne sont pas conformes');
             

           })

           it('Éditer nom profil freelance champs nom libre CDT_bwo-59 ',function()
        {
           /// Ticket BWO-59/CA6

/// CA 6: Éditer profil freelance champs Nom manquant (non-passant)

/// Modification du Nom_ Editer mon profil _Freelance champs Nom manquant (passant) ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il renseigne son adresse email
/// And il renseigne son MDP
/// And il clique sur le bouton "valider"
/// And clique sur le bouton "profil"
/// And il éfface le nom et laisse libre le champs
/// And il clique sur enregistrer
/// Then un popup s'affiche avec le message suivant : les données saisies ne sont pas conformes

             cy.visit('https://staging.birds-worker.com/');
             cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
             
             cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
             cy.get('.email').type('karim.benzema@yahoo.com').should('have.value','karim.benzema@yahoo.com');

             cy.get('.password').type('realmadrid').should('have.value','realmadrid');
             cy.get('.button-primary').click()
             cy.wait(500);

             cy.get('body > div.my-profile > div.profile-head-content > div > div > div.edit-headline.button.button-primary-inverse').click();
             cy.wait(500);
             cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-header > div').should('contain','Editer mon profil');
             
             cy.get('.lastname').clear();
             cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div:nth-child(7) > button').click({force:true})
             cy.wait(600);
             cy.get('[style="padding-top: 20px 20px;"]').should('contain','les données saisies ne sont pas conformes');

           })


            it('Éditer nom profil freelance champ Intitulé libre CDT_bwo-60 ',function()
         {
            /// Ticket BWO-60/CA7

/// CA 7: Éditer profil freelance champ Intitulé manquant (passant)

/// Modification du Nom_ Editer mon profil _Freelance champ intitulé manquant (non-passant) ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il renseigne son adresse email
/// And il renseigne son MDP
/// And il clique sur le bouton "valider"
/// And clique sur le bouton "profil"
/// And il éfface l'intitulé' et laisse libre le champ
/// And il clique sur enregistrer
/// Then un popup s'affiche avec le message suivant : Veuillez remplir le champ intitulé

              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
              
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
              cy.get('.email').type('karim.benzema@yahoo.com').should('have.value','karim.benzema@yahoo.com');

              cy.get('.password').type('realmadrid').should('have.value','realmadrid');
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.my-profile > div.profile-head-content > div > div > div.edit-headline.button.button-primary-inverse').click();
              cy.wait(500);
              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-header > div').should('contain','Editer mon profil');
              
              cy.get(':nth-child(4) > .headline').clear();
              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div:nth-child(7) > button').click({force:true})
              cy.wait(600);
              cy.get('[style="padding-top: 20px 20px;"]').should('contain','Veuillez remplir le champ Intitulé');

            })

            it('Éditer nom profil freelance champ TJM libre CDT_bwo-62 ',function()
         {
            /// Ticket BWO-62/CA8

/// CA 8: Éditer profil freelance champ TJM manquant (passant)

/// Modification du Nom_ Editer mon profil _Freelance champs intitulé manquant (non-passant) ('https://staging.birds-worker.com')
/// When il clique sur le bouton "connexion" sur le header de la home page
/// And il renseigne son adresse email
/// And il renseigne son MDP
/// And il clique sur le bouton "valider"
/// And clique sur le bouton "profil"
/// And il éfface le TJM et laisse libre le champ
/// And il clique sur enregistrer
/// Then Then un popup s'affiche avec le message suivant : Veuillez remplir le champ Tarif journalier

              cy.visit('https://staging.birds-worker.com/');
              cy.get('body > div.home-welcome-background > div > div > div.home-top-header > div > span:nth-child(2)').click()
              
              cy.get('input').invoke('attr', 'placeholder').should('contain', 'moi@email.com')
              cy.get('.email').type('karim.benzema@yahoo.com').should('have.value','karim.benzema@yahoo.com');

              cy.get('.password').type('realmadrid').should('have.value','realmadrid');
              cy.get('.button-primary').click()
              cy.wait(500);

              cy.get('body > div.my-profile > div.profile-head-content > div > div > div.edit-headline.button.button-primary-inverse').click();
              cy.wait(500);
              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-header > div').should('contain','Editer mon profil');
              
              cy.get(':nth-child(5) > .price').clear();
              cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div:nth-child(7) > button').click({force:true})
              cy.wait(600);
              cy.get('[style="padding-top: 20px 20px;"]').should('contain','Veuillez remplir le champ Tarif journalier');

            })




        }      
    
        )
