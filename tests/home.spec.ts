import {test,expect} from "@playwright/test";
import HomePage from "../pages/home.page";



test.describe('Home', () => {
    let homePage: HomePage;
    test('Open home page and verify title', async ({ page }) => {
        homePage = new HomePage(page);
        //Open Url
        await page.goto('https://ats.ai-recruitment.co/sign-in/recruiter');
        
        //Verify title
        await expect(page).toHaveTitle('ATS')
    });
    
});

test.describe('About', () => {
    test('Open about page and verify title ', async ({ page }) => {
        await page.goto ('https://practice.sdetunicorns.com/about/');
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
    })
    
});
test.describe('Click get started button using CSS Selector', () => {
    let homePage;
    test('Open about page and verify title ', async ({ page }) => {

        await page.goto ('/');
        await page.pause()
        const homePage = new HomePage(page);
        console.log(homePage.getStartedBtn);
        await expect(page).not.toHaveURL(/.*get-started/)
        // await page.locator('#get-started').click();
        await HomePage.getStartedBtn.click()
        await expect(page).toHaveURL(/.*get-started/)
    })
    
});
test.describe('Verify heading text is visible using text selector', () => {
    test('Open about page and verify title ', async ({ page }) => {
        await page.goto ('https://practice.sdetunicorns.com');
        const headingText = await page.locator('text=Think different. Make different.');    
        await expect(headingText).toBeVisible
    })
    
});

test.describe('Verify home link is enabled using text and css selector', () => {
    test('Open about page and verify title ', async ({ page }) => {
        await page.goto ('https://practice.sdetunicorns.com');
        const homeText = await page.locator('#zak-primary-menu:has-text"Home"');    
        await expect(homeText).toBeEnabled
    })
    
});

test.describe('Verify search icon is visible xpath selector', () => {
    test('Open about page and verify title ', async ({ page }) => {
        await page.goto ('https://practice.sdetunicorns.com');
        const searchIcon = await page.locator('//*[@class="zak-header-actions zak-header-actions--desktop"]//*[@class="zak-header-search__toggle"]');    
        await expect(searchIcon).toBeVisible
    })
    
});

test.describe('Verify text for all nav links', () => {
    test('Open about page and verify title ', async ({ page }) => {

    const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account"
    ];

        await page.goto ('https://practice.sdetunicorns.com');
        const navLinks = page.locator('#zak-primary-menu li[id*=menu]').nth(5);    
        expect(await navLinks.textContent()).toEqual(expectedLinks[5])
    })
    
});

test.describe('Verify text for all nav links', () => {
    test('Verify text for all nav links', async ({ page }) => {

    const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account"
    ];
    
        await page.goto ('https://practice.sdetunicorns.com');
        const navLinks = page.locator('#zak-primary-menu li[id*=menu]')
        for (const el of await navLinks.elementHandles()) {
           console.log(await el.textContent())
        }  
        expect(await navLinks.textContent()).toEqual(expectedLinks[5])
    })
    
});

test('Verify loop', async ({ page }) => {
    const expectedLinks = [
        "Home",
        "About",
        "Shop",
        "Blog",
        "Contact",
        "My account"
    ];
    await page.goto ('https://practice.sdetunicorns.com');
    const navLinks = page.locator('#zak-primary-menu li[id*=menu]')
      for (const el of await navLinks.elementHandles()) {
      await el.textContent()
    }  
});



    test.describe('Exercise1', () => {
        test('', async ({ page }) => {
        await page.goto ('https://practice.sdetunicorns.com/contact/');
        await page.getByRole('textbox').fill('Peter');
        await expect(page).not.toHaveURL(/.*get-started/)
        await page.locator('#get-started').click();
        await expect(page).toHaveURL(/.*get-started/)
        })
        
    });
    