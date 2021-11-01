/// <reference types="cypress" />
describe('Location Elements',function()
    {

        /// US_Connexion URL
    
       it('Connexion site birds-worker',function()
       {
           cy.visit('https://staging.birds-worker.com/');
           cy.get('div.home-welcome-background:nth-child(1) div.home-welcome-background-content div.home-welcome-background-content-inner div.home-top-header div.home-top-login > span.home-top-register:nth-child(2)').click();

       })
       

       it('Edit freelance',function() ///Éditer le profil Freelance (identité, tjm)
       {
           cy.get('.email').type('dbenchetrit5@gmail.com')
           cy.get('.password').type('Avensis');
           cy.get('body:nth-child(2) div.login-page:nth-child(1) div.login-page-form div.login-page-form-row:nth-child(5) > div.button.button-primary.validate-button:nth-child(1)').click();
           cy.get('body > div.my-profile > div.profile-head-content > div > div > div.edit-headline.button.button-primary-inverse').click();
           cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div.app-form-row.app-form-row--half.app-form-row--half-first > input').clear().type('Mickael');
           cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div:nth-child(2) > input').clear().type('Owen');
           cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div:nth-child(4) > input').clear().type('Ingenieur QA');
           cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div:nth-child(5) > input').clear().type('650');
           cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > form > div > div:nth-child(7) > button').click();
           cy.wait(500);


        })

        it('Edit freelance profile',function() /// Éditer le profil Freelance (disponibilité, skills, expériences)
        {
            cy.get('body > div.my-profile > div.content-wrapper > div > div:nth-child(1) > div.section-content > div:nth-child(1) > span').click();
            cy.get('.edit-location').click();
            cy.get('.autocomplete-place-input.pac-target-input').type('Marseille');
            cy.get('.pac-item', { timeout: 5000 }).should('be.visible');
            cy.contains(".pac-item", "13").click();
            cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-footer > div > div').click();
            cy.wait(500);
            cy.get('[style="padding: 15px 0; text-align: right;"] > .button').click();
            cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-footer > div > div').click();
            

        })

        it('Edit freelance profile part 2',function()
        {
            /// connexion compte freelance

            cy.wait(1000);
            cy.get('.email').type('dbenchetrit5@gmail.com');
            cy.get('.password').type('Avensis');

            ///switch ()
            cy.get('body:nth-child(2) div.login-page:nth-child(1) div.login-page-form div.login-page-form-row:nth-child(5) > div.button.button-primary.validate-button:nth-child(1)').click();
            cy.get('body > div.my-profile > div.content-wrapper > div > div:nth-child(3) > div.section-content.mission-type > div:nth-child(1) > div.chackbox-container.checkbox-mission-type-office > span').click()
            cy.get('body > div.my-profile > div.content-wrapper > div > div:nth-child(3) > div.section-content.mission-type > div:nth-child(2) > div.chackbox-container.checkbox-mission-type-remote > span').click()

            /// Créer une nouvelle expérience
            cy.get('body > div.my-profile > div.content-wrapper > div > div:nth-child(3) > div.section-content.mission-type > div:nth-child(1) > div.chackbox-container.checkbox-mission-type-office > span').click();
            cy.get('body > div.my-profile > div.content-wrapper > div > div:nth-child(3) > div.section-content.mission-type > div:nth-child(2) > div.chackbox-container.checkbox-mission-type-remote > span').click();
            cy.get('body > div.my-profile > div.content-wrapper > div > div:nth-child(4) > div.section-content > div.button.button-primary.button-primary-inverse').click();
            cy.get('.description').clear().type('Just another story from a regular nerd who only wants to get hired as QA engineer');
            cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div > div:nth-child(2) > div.button.validate').click();

            cy.wait(500)

            /// Years of expérience
        
            cy.get('.years-of-xp').wait(1000).select('12').should('have.value','12');

            /// Ajouter une experience

            cy.get('body > div.my-profile > div.content-wrapper > div > div.section.section-experiences > div.section-content > div.button.button-primary.button-primary-inverse.add-experience').click({ force: true });
            cy.wait('5000');
            cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div')

            cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div > div:nth-child(2) > input').type('Bouygues')
            cy.get('div.app-popup-container.app-popup--show > div > div.app-popup-content > div > div:nth-child(3) > input').type('2019')
            cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div > div:nth-child(4) > input').type('5 ans')
            cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div > div:nth-child(5) > textarea').type('QA analyst')
            cy.get('body > div.app-popup-container.app-popup--show > div > div.app-popup-content > div > div:nth-child(6) > div').click()
            

        })    

            it('check section titles visibility',function()
            {
                cy.get('body > div.my-profile > div.content-wrapper > div > div:nth-child(1) > div.section-title').should('be.visible');
                cy.get('body > div.my-profile > div.content-wrapper > div > div:nth-child(2) > div.section-title').should('be.visible');
                cy.get('body > div.my-profile > div.content-wrapper > div > div:nth-child(3) > div.section-title').should('be.visible');
                cy.get('body > div.my-profile > div.content-wrapper > div > div:nth-child(4) > div.section-title').should('be.visible');
                cy.get('body > div.my-profile > div.content-wrapper > div > div:nth-child(5) > div.section-title').should('be.visible');
                cy.get('body > div.my-profile > div.content-wrapper > div > div.section.section-years-of-xp > div.section-title').should('be.visible');
                cy.get('body > div.my-profile > div.content-wrapper > div > div.section.section-experiences > div.section-title').should('be.visible');
                cy.get('body > div.my-profile > div.content-wrapper > div > div:nth-child(8) > div.section-title').should('be.visible');


                
                

           
            

        




        })
           

        


    


            

            



        



       
        
    }      
    
)


    


    