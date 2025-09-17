import HomePage from '../pages/HomePage';
import ContactUsPage from '../pages/ContactUsPage';

describe('Contact Us form test', () => {
  it('Submit contact us form with upload and success message', () => {
    const home = new HomePage();
    const contact = new ContactUsPage();

    home.visit('/');
    home.clickContactUs();

    // usar dados "dinâmicos"
    const name = `TesteContato_${Date.now()}`;
    const email = `contato_${Date.now()}@example.com`;

    contact.fillName(name);
    contact.fillEmail(email);
    contact.fillSubject('Dúvida sobre produto');
    contact.fillMessage('Olá, gostaria de mais informações.');
    // upload: colocar arquivo exemplo na fixtures / cypress/fixtures/sample_upload.txt
    contact.uploadFile('sample_upload.txt');
    contact.submitContactForm();
    contact.successMessageVisible();
  });
});
