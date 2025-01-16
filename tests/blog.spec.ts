import {test, expect} from '@playwright/test';
import BlogPage from '../pages/blog.page';

test.describe('Blog', () => {
    let blogPage: BlogPage;
    test('Verify Recent Posts count and verify the length of each list item ', async ({ page }) => {
        blogPage = new BlogPage(page)
        await blogPage.navigation();
        for (const el of await blogPage.recentItems.elementHandles()){
           console.log(((await el.textContent())!.trim()).length);

            expect(((await el.textContent())!.trim()).length).toBeGreaterThan(10)
        }
         await blogPage.countItems()
    })
    
})  
