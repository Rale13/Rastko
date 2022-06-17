class ArhiveOrg {

get configBtn() {
    return cy.get('.vs-c-site-logo').eq(8);
}

get arhiveBtn() {
    return cy.get('button[class="vs-c-btn vs-c-btn--success vs-c-btn--spaced"]')
}

get modalDialog() {
    return cy.get('.vs-c-modal');
}

get yesBtn() {
    return this.modalDialog.find('button').eq(2);
}

get archivedContainer() {
    return cy.get('.class="vs-l-archived-container"')
}

arhive() {
    this.configBtn.click();
    this.arhiveBtn.click();
    this.yesBtn.click();
}

}

export const arhiveOrg = new ArhiveOrg();