
describe ('home page', () => {  //Defindo uma switch de teste
    it ('app deve estar online',()=>{ 
        cy.viewport(1440, 900)
        var aceitacao =  cy.visit('https://buger-eats-qa.vercel.app/')

        cy.get('#page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats') //validar ser a o texto

      
            console.log(aceitacao)
    
           
        
        
    })
})


