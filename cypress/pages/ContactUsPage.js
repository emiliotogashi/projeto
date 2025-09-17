import BasePage from './BasePage';

class ContactUsPage extends BasePage {
  fillName(name) {
    cy.get('input[data-qa="name"]').type(name);
  }

  fillEmail(email) {
    cy.get('input[data-qa="email"]').type(email);
  }

  fillSubject(subject) {
    cy.get('input[data-qa="subject"]').type(subject);
  }

  fillMessage(message) {
    cy.get('textarea[data-qa="message"]').type(message);
  }

  uploadFile(fileName) {
    cy.get('input[name="upload_file"]').attachFile(fileName);
  }

  submitContactForm() {
    cy.get('input[data-qa="submit-button"]').click();
  }

  successMessageVisible() {
    return cy.get('div.status.alert.alert-success').should('contain', 'Success! Your details have been submitted successfully.');
  }
}

export default ContactUsPage;
