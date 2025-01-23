describe('Авторизация', function () {

    it('Успешная Авторизация', function () {
         cy.visit('https://login.qa.studio/'); 
         cy.get('#mail').type('german@dolnikov.ru'); // Ввести верный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввести верный пароль

         cy.get('#loginButton').click(); // Нажать кнопку войти

         cy.get('#messageHeader').should('be.visible'); // Текст виден
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Текст верен

         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден        
     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#forgotEmailButton').click(); // Нажать кнопку забыли пароль

        cy.get('#forgotForm > .header').should('be.visible'); // Текст виден
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // Текст верен
                
        cy.get('#mailForgot').type('luboy@email.ru'); // Ввести почту
        cy.get('#restoreEmailButton').click(); // Нажать кнопку отправить код

        cy.get('#messageHeader').should('be.visible'); // Текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Текст верен
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден  
    })

    it('Неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov.ru'); // Ввести верный логин
        cy.get('#pass').type('123iLoveqastudio1'); // Ввести НЕВЕРНЫЙ пароль

        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').should('be.visible'); // Текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст верен

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден        
    })

    it('Неверный логин', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('wrong@login.ru'); // Ввести НЕВЕРНЫЙ логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввести верный пароль

        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').should('be.visible'); // Текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Текст верен

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден        
    })

    it('Логин без @', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('germandolnikov.ru'); // Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввести верный пароль

        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').should('be.visible'); // Текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Текст верен

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден        
    })

    it('Проверка на регистр', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввести верный пароль

        cy.get('#loginButton').click(); // Нажать кнопку войти

        cy.get('#messageHeader').should('be.visible'); // Текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Текст верен

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик виден        
    })
 }) 

