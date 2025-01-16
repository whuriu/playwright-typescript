import { Page,Locator,expect } from "@playwright/test";
import {faker} from '@faker-js/faker'
class ContactPage{
    private page:Page
    contactName: Locator;
    contactEmail: Locator;
    contactPhone: Locator;
    contactMessage: Locator;
    submitBtn: Locator;
    successAlert: Locator;

    constructor(page:Page){
        this.page = page;
        this.contactName = page.locator('.contact-name input');
        this.contactEmail = page.locator('.contact-email input');
        this.contactPhone = page.locator('.contact-phone input');
        this.contactMessage = page.locator('.contact-message textarea');
        this.submitBtn = page.locator('.everest-forms-submit-button');
        this.successAlert = page.locator('div[role="alert"]')
    }

    // fillName(){
    //     return this.contactName.fill('Test name')
    // }
    // fillEmail(){
    //     return this.contactEmail.fill('test@gmail.com')
    // }
    // fillPhone(){
    //     return this.contactPhone.fill('000981293')
    // }
    // fillMessage(){
    //     return this.contactMessage.fill('Test message')
    // }
    checkOnSuccessMessage(){
       return expect(this.successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    }
    clikcSubmit(){
       return this.submitBtn.click()
    }
    navigatation(){
        return this.page.goto ('/contact')
    }
    
    async fillForm(name:string, email:string, phone:string, message:string){
        await this.contactName.fill(name);
        await this.contactEmail.fill(email);
        await this.contactPhone.fill(phone);
        await this.contactMessage.fill(message)
    }
}

export default ContactPage;