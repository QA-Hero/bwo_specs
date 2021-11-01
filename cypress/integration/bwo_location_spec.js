/// <reference types="cypress" />
describe('Location Elements',function()
    {

       it('Verify types of locators',function()
            {
            
             cy.visit("https://demo.nopcommerce.com/") // Opens the URL

             cy.get("#small-searchterms").type("Apple Macbook Pro 13-inch") // Search Box

             cy.get(".search-box-button").click() // Click on search button

             cy.get(".product-box-add-to-cart-button").click() // Add to cart button
             
             cy.get("#product_enteredQuantity_4").clear().type('2')   // quantity 
             
             cy.get('#add-to-cart-button-4').click() //after updating quantity

             cy.get('.cart-label').click()  // get to the shopping cart

             cy.get('#termsofservice').check // accept the service conditions

             cy.get('.checkout-button').click // Checkout

            }   

        )
    }       
    
)