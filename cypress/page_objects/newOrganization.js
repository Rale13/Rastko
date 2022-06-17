class NewOrganization {

get addOrganization() {
    return cy.get('div[class="vs-c-my-organization vs-c-my-organization--add-new not-sortable"]').click();
}

get orgName() {
    return cy.get('input[type="text"]')
}

get nextBtn() {
    return cy.get('button[type="button"]').eq(3)
}

get createBtn() {
    return cy.get('button[name="next_btn"]')
}

get boardsModal() {
    return cy.get(".vs-c-modal__body");
  }
  get okBtn() {
    return this.boardsModal.find("button").last();
  }


newOrg(name) {
    this.addOrganization;
    this.orgName.type(name);
    this.nextBtn.click();
    this.createBtn.click();
    this.okBtn.click();
}


}

export const newOrganization = new NewOrganization();