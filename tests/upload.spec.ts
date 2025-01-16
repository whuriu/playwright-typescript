import {test, expect} from '@playwright/test'
const path = require('path');
import CartPage from '../pages/cart.page';


    

test.describe('Upload file', () => {
    let cartPage: CartPage;
    const fileName = ['footer.jpeg', '3mb-examplefile-com.txt']

    for (const name of fileName){
        test(`Should upload a ${name} file`, async ({ page }) => {
            cartPage = new CartPage(page)
            await page.goto('https://practice.sdetunicorns.com/cart');
            const fileUpload = path.join(__dirname,`../data/${name}`);
            cartPage.uploadComponent().uploadFile(fileUpload)
            await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully', {timeout: 10000})
        })  

        test(`Should upload a ${name} file with DOM2`, async ({ page }) => {
            await page.goto('https://practice.sdetunicorns.com/cart');
            const fileUpload = path.join(__dirname,`../data/${name}`);
            cartPage.uploadComponent().uploadFile(fileUpload)
            await expect(cartPage.uploadComponent().successTxt).toContainText('uploaded successfully', {timeout: 10000})
        })

    }


    test.skip('Should upload a test file with DOM', async ({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/cart');
        const fileUpload = path.join(__dirname,'../data/footer.jpeg');
        await page.evaluate(()=>{
            const selector = document.querySelector('#upfile_1')
            if (selector) {
                selector.className = ''
            }
            
        })
        await page.setInputFiles('input#upfile_1', fileUpload);
        await page.locator('input#upload_1').click()
        await expect(page.locator('#wfu_messageblock_header_1_container_1')).toContainText('uploaded successfully')
    })


    
    
})


