
    class SignupPage {
        go() {
            cy.visit('/') 
            cy.get('a[href="/deliver"]').click()
            cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas') //CHECKPOINT           
        }

        fillForm(deliver) { //Funcao preencher os campos do formulario
           
            cy.get('input[name="fullName"]').type(deliver.name)
            cy.get('input[name="cpf"]').type(deliver.cpf)   //campos 
            cy.get('input[name="email"]').type(deliver.email)
            cy.get('input[name="whatsapp"]').type(deliver.whatsapp)


            cy.get('input[name="postalcode"]').type(deliver.postalcode) //Campo para o postalcode
            cy.get('input[type=button][value="Buscar CEP"]').click() //Click no botão do postalcode
            
            cy.get('input[name="address-number"]').type(deliver.address.number) //Preencher os campos detailss
            cy.get('input[name="address-details"]').type(deliver.address.details)

            cy.get('input[name="address"]').should('have.value', deliver.address.street) //Verificar se os campos que vinheram do postalcode Estão correto
            cy.get('input[name="district"]').should('have.value', deliver.address.district)
            cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

            cy.contains('.delivery-method li', deliver.delivery_method).click() //Clicar no metodo moto

            cy.get('input[accept^="image"]').attachFile(deliver.cnh) //Acento sintaxe referente a oque começar no texto a parte do ascento 
        }

        fillFormCiclista(deliver) { //Funcao preencher os campos do formulario
           
            cy.get('input[name="fullName"]').type(deliver.name)
            cy.get('input[name="cpf"]').type(deliver.cpf)   //campos 
            cy.get('input[name="email"]').type(deliver.email)
            cy.get('input[name="whatsapp"]').type(deliver.whatsapp)


            cy.get('input[name="postalcode"]').type(deliver.postalcode) //Campo para o postalcode
            cy.get('input[type=button][value="Buscar CEP"]').click() //Click no botão do postalcode
            
            cy.get('input[name="address-number"]').type(deliver.address.number) //Preencher os campos detailss
            cy.get('input[name="address-details"]').type(deliver.address.details)

            // cy.get('input[name="address"]').should('have.value', deliver.address.street) //Verificar se os campos que vinheram do postalcode Estão correto
            //cy.get('input[name="district"]').should('have.value', deliver.address.district)
            //cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

            cy.contains('.delivery-method li', deliver.delivery_method).click() //Clicar no metodo moto

            //cy.get('input[accept^="image"]').attachFile(deliver.cnh) //Acento sintaxe referente a oque começar no texto a parte do ascento 
        }

        fillFormWithoutCEP(deliver){ //Funcao apenas clicando no botão sem preencher 
            cy.get('input[name="fullName"]').type(deliver.name)
            cy.get('input[name="cpf"]').type(deliver.cpf)   //campos 
            cy.get('input[name="email"]').type(deliver.email)
            cy.get('input[name="whatsapp"]').type(deliver.whatsapp)


            cy.get('input[name="postalcode"]').type(deliver.postalcode) //Campo para o postalcode        
        }

       
       buttonPostal(){//Click no botão do postalcode
        cy.get('input[type=button][value="Buscar CEP"]').click()  
       }

        submit(){  //Clica no botão cadastrar
            cy.get('button[class="button-success"]').click(); //Clica no botão cadastrar
        } 

        modalContentShouldBe(expectedMessage){  //Validando o Pop Up
            
         cy.get('div[class="swal2-html-container"]')
        .should('have.text', expectedMessage)
        }

        alertMessageShouldBe(expectedMessage){//msg de error
           // cy.get('.alert-error').should('have.text', expectedMessage)
            cy.contains('.alert-error', expectedMessage).should('be.visible')
        }

        
    }

    export default new SignupPage;