import { Page, Locator, expect } from "@playwright/test";

class BlogPage{
    private page: Page;
    recentItems: Locator;

    constructor(page: Page){
        this.page = page;
        this.recentItems = page.locator('#recent-posts-3 ul li')
        
    }

     navigation(){
        return this.page.goto('/blog');
    }
    async countItems(){
        const itemToCount = await this.recentItems.count();
        expect(itemToCount).toEqual(5)
    }
}

export default BlogPage;