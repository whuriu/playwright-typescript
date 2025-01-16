import { chromium, FullConfig    } from "@playwright/test";

async function globalSetUp(config:FullConfig) {
    const browser = await chromium.launch();
    const page = await browser.newPage()
            await page.goto('https://practice.sdetunicorns.com/my-account')
            const notLoggedInState = 'notLoggedInState.json';
            await page.context().storageState({path:notLoggedInState});

            await page.locator('#username').fill('practiceuser1')
            await page.locator('#password').fill('PracticePass1!')
            await page.locator('[value = "Log in"]').click()

    //save signed-in state to 'loggedInState.json'
    const loggedInState = 'loggedInState.json';
    await page.context().storageState({path:loggedInState});
    await browser.close(); 
}

export default globalSetUp;