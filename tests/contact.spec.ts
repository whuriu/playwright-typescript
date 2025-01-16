
import {test} from '@playwright/test';
import ContactPage from '../pages/contact.page';
import {faker} from '@faker-js/faker';

test.describe('Contact from', () => {
    let contactPage: ContactPage;
    test('Fill contact form and verify success message ', async ({ page }) => {
        contactPage = new ContactPage(page)
        await contactPage.navigatation()
        // await page.pause()
        await contactPage.fillForm(faker.name.fullName(), faker.internet.email(), faker.phone.number(),faker.lorem.paragraphs(2))
        await contactPage.clikcSubmit()
        // await expect.soft(page.locator('.contact-message textarea')).toHaveText('Fail')
        // const successAlert = page.locator('div[role="alert"]')
        await contactPage.checkOnSuccessMessage()
        // expect(test.info().errors.length).toBeLessThan(1)

    })
    
})  
