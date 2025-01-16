import{test, expect} from '@playwright/test'

test.describe('My Account', () => {
    
    test('Access orders', async ({page}) => {
        await page.goto('/my-account/')
        await page.locator('li.woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--orders').click()
        await expect(page).toHaveURL(/.*orders/)

    })

    test('Downloads', async ({page}) => {
        await page.goto('/my-account/')
        await page.locator('li.woocommerce-MyAccount-navigation-link.woocommerce-MyAccount-navigation-link--downloads').click()
        await expect(page).toHaveURL(/.*downloads/)

    })

    test.describe('Account without login', () => {
        test.use({storageState:'notLoggedInState.json'})
        test('Account', async ({ page }) => {
            await page.goto('/my-account/')
            await expect(page.locator('#reg_username')).toBeVisible()
            await expect(page.locator('#password')).toBeVisible()
        })
    })
    

    
})
