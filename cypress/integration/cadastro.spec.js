
import signup from '../pages/SignupPage'

describe('Cadastro', () => { //bloco switch de teste de cadastro

    beforeEach(function() { //fixture para carregar JSON, carregar a massa de dados entregador
        cy.fixture('deliver').then((d)=>{
             this.deliver = d
        })
    } )


    it('Cadastro Motoqueiro', function (){
    
        signup.go()
        signup.fillForm(this.deliver.signup)
        
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.submit(expectedMessage)
        
 
    })

    it('Cadastro Ciclista', function(){   
        signup.go()
        signup.fillFormCiclista(this.deliver.signupBike)
        signup.submit()


    })

    it('Campos Obrigatórios', function() {
        signup.go()
        signup.submit()
        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })

    it('Email Incorreto', function() {
        signup.go()
        signup.fillForm(this.deliver.email_incorreto)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    it('CPF Incorreto', function (){
    
        signup.go()
        signup.fillForm(this.deliver.cpf_incorreto)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')


    })

    it('CEP Incorreto', function(){
       
        signup.go()
        signup.fillFormWithoutCEP(this.deliver.cep_incorreto)
        signup.buttonPostal()
        signup.alertMessageShouldBe('Informe um CEP válido')

    })
     
    

})

