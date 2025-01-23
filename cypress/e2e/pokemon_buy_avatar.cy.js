describe('Покупка аватара', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/login'); // зайти на сайт
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввести верную почту
         cy.get('#password').type('USER_PASSWORD'); // ввести верный пароль
         cy.get('.auth__button').click(); // Нажать кнопку войти

         cy.get('.header__container > .header__id').click(); // зайти в личный кабинет
         cy.get('[href="/shop"]').click(); // перейти в покупку аватара

         cy.get('.available > button').first().click({ force: true }); // нажать кнопку купить (доступный аватар)

         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // ввести номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1025') // ввести месяц/год
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125') // ввести CVV ()
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Ivanov Ivan') // ввести имя владельца
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');                            // ввести код СМС
         cy.get('.payment__submit-button').click();                      // нажать кнопку отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     })
 }) 