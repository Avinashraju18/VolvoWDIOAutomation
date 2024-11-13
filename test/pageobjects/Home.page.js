import { $, $$ } from '@wdio/globals';
import { 
    scrollToElementAndClick, 
    waitForElementToBeDisplayed, 
    pause, 
    getElementText, 
    getElementBackgroundColor 
} from '../utils/utils';  // Import utility functions

class HomePage {
    // Accept Cookies button
    get acceptCookiesButton() {
        return $('#onetrust-accept-btn-handler');
    }

    // Overview section text
    get overviewText() {
        return $('/html/body/nav/div[3]/ul/li[1]/a/em');
    }

    // Safe Space section heading text
    get safeSpaceHeadingText() {
        return $('//*[@id="operational-emissions"]/div[2]/h4');
    }

    // Safe Space section title text
    get safeSpaceTitleText() {
        return $('//*[@id="aboutUsSliderWithIcons-1-1"]/div[1]/button[1]/div/div[2]/p');
    }

    // First scroll button to navigate
    get firstScrollButton() {
        return $('//*[@id="aboutUsSliderWithIcons-1-1"]/div[1]/button[2]');
    }

    // Partial text element after the first scroll button click
    get partialTextAfterClick() {
        return $('//*[@id="aboutUsSliderWithIcons-1-1"]/div[1]/button[2]/div/div[2]/p');
    }

    // Second scroll button for navigation
    get secondScrollButton() {
        return $('//*[@id="aboutUsSliderWithIcons-1-1"]/div[1]/button[3]/div');
    }

    // Button for navigating the carousel
    get carouselScrollButton() {
        return $('//*[@id="aboutUsCarCarousel-0-3"]/div/div[1]/div[2]/button[2]');
    }

    // List of buttons (recharge model buttons)
    get rechargeModelButtons() {
        return $$('div#\\:r0\\: > button');
    }

    // Get text of Overview section
    async getOverviewText() {
        return await getElementText(this.overviewText);
    }

    // Get text of Safe Space heading
    async getSafeSpaceHeadingText() {
        return await getElementText(this.safeSpaceHeadingText);
    }

    // Get text of Safe Space title
    async getSafeSpaceTitleText() {
        return await getElementText(this.safeSpaceTitleText);
    }

    // Click "Accept Cookies" button
    async clickAcceptCookies() {
        await scrollToElementAndClick(this.acceptCookiesButton);
    }

    // Click the first scroll button
    async clickFirstScrollButton() {
        await scrollToElementAndClick(this.firstScrollButton);
    }

    // Get the text of the second lifesaver after clicking the first button
    async getSecondLifesaverText() {
        return await getElementText(this.partialTextAfterClick);
    }

    // Check if the button is disabled based on the background color (used for debugging)
    async isSecondButtonDisabled() {
        const backgroundColor = await getElementBackgroundColor(this.secondScrollButton);
        console.log('Background Color:', backgroundColor); // Log for debugging
        return backgroundColor === 'rgba(0,0,0,0)'; // Example disabled state check
    }

    // Click the carousel scroll button until it is disabled
    async clickCarouselButtonUntilDisabled(maxClicks = 5) {
        let clickCount = 0;

        // Click up to the maximum specified times or until the button is disabled
        while (await this.carouselScrollButton.isEnabled() && clickCount < maxClicks) {
            await scrollToElementAndClick(this.carouselScrollButton);
            clickCount++;
            await pause(1000); // Adjust as needed
        }

        // After clicking, verify the button is disabled
        const isDisabled = await this.carouselScrollButton.isEnabled() === false;
        if (isDisabled) {
            console.log('Carousel button is disabled as expected after', clickCount, 'clicks.');
        }

        const ariaDisabled = await this.carouselScrollButton.getAttribute('aria-disabled');
        if (ariaDisabled === 'true') {
            console.log('Button is disabled based on aria-disabled attribute.');
        } else {
            console.log('Button is not disabled based on aria-disabled attribute.');
        }
    }

    // Get all recharge model button texts and print them
    async getAllRechargeModelButtonTexts() {
        const buttons = await this.rechargeModelButtons;
        for (let i = 0; i < buttons.length; i++) {
            const buttonText = await getElementText(buttons[i]);
            console.log("List of recharge models:", buttonText); // Log the text of each button
        }
    }

    // Check if "Crossover (1)" text exists in the recharge model button list
    async isCrossoverButtonTextPresent() {
        const crossoverButton = await $$('div#\\:r0\\: button')[1]; // Locate the button by index
        const text = await getElementText(crossoverButton);
        console.log('Found text:', text); // Log the found text for debugging
        return text === "Crossover (1)"; // Check if the text matches the expected value
    }
}

export default new HomePage();
