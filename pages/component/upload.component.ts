import { Page, Locator } from "@playwright/test";

class UploadComponent{
   private page: Page;
    uploadInput: string;
    submitBtn: Locator;
    successTxt: Locator;

    constructor (page: Page){
        this.page = page;
        this.uploadInput = 'input#upfile_1'
        this.submitBtn = page.locator('input#upload_1')
        this.successTxt = page.locator('#wfu_messageblock_header_1_container_1')
        
    }

    async uploadFile(fileUpload: string){
        await this.page.setInputFiles(this.uploadInput, fileUpload);
        await this.submitBtn.click()
    }
}

export default UploadComponent;
