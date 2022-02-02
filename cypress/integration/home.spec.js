
describe ('home page', () => {  //Defindo uma switch de teste
    it ('app deve estar online',()=>{ 

        var visitou =  cy.visit('/')

        cy.get('#page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats') //validar ser a o texto

      
            console.log(visitou)
    
           
        
        
    })
})


