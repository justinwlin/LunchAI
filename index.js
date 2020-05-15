const puppeteer = require('puppeteer');

const PAGE_AI_REFERRAL_LINK = "https://lunchclub.ai/?invite_code=justinl11"
async function startBrowser() {
    while (true) {
        try {
            const browser = await puppeteer.launch({
                headless: true,
                defaultViewport: null
            });
            //CREATING THE PAGE
            const page = await browser.newPage();
            await page.goto(PAGE_AI_REFERRAL_LINK);
            blockingWait(2);
            let randomString = Math.random().toString(36).substring(2, 5) + Math.random().toString(36).substring(2, 15);
            randomString += "@gmail.com"
            await page.click('.sc-hORach');
            await page.keyboard.type(randomString)
            await page.keyboard.press("Enter")
            blockingWait(2);
            await page.click('input.sc-fAjcbJ.jnxxtk');
            await page.keyboard.type(randomString)
            await page.keyboard.press("Tab")
            await page.keyboard.type(randomString)
            await page.keyboard.press("Enter")
            blockingWait(1);
            await page.click('.sc-cSHVUG.gthrYl');
            blockingWait(1);
            await page.click('.sc-cSHVUG.dIBUXk');
            blockingWait(1);
            await page.click('.sc-bRBYWo.fXDGGm');
            // await page.click('button.sc-cooIXK.gJAIaS');
            // blockingWait(3);
            // await page.click('button.sc-bRBYWo.fXDGGm');
            // blockingWait(3);
            // await page.click('button.sc-bRBYWo.fXDGGm');
            // blockingWait(3);
            // await page.click('textarea.sc-kXeGPI.cdqdwU');
            // blockingWait(3);
            // await page.keyboard.type(randomString)
            // blockingWait(3);
            // await page.keyboard.press("Tab")
            // await page.keyboard.press("Tab")
            // await page.keyboard.press("Enter")
            // blockingWait(3);
            // await page.click('button.sc-bRBYWo.fXDGGm');
            try {
                console.log("SIGNED UP COMPLETED")
                await browser.close();
            }
            catch (error) {
                console.log(error);
                await browser.close();
            } finally {
                await browser.close();
            }
        } catch{
            console.log("A FAILURE RETRYING")
        }

    }
    console.log("COMPLETELY FINISHED")
}

//FUNCTION TO HANDLE CSV
function blockingWait(seconds) {
    //simple blocking technique (wait...)
    var waitTill = new Date(new Date().getTime() + seconds * 1000);
    while (waitTill > new Date()) { }

}


startBrowser()
