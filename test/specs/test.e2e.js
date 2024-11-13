import { browser, expect } from '@wdio/globals';
import HomePage from '../pageobjects/Home.page';
import { pause, waitForElementToBeDisplayed } from '../utils/utils'; // Import utility functions

describe('Automation Test for Volvo Home Page', () => {
    // Before each test, navigate to the page and maximize the window
    beforeEach(async () => {
        await browser.url("https://www.volvocars.com/intl/safety/highlights/");
        await browser.maximizeWindow();
    
        // Ensure the page has fully loaded before proceeding
        await browser.waitUntil(async () => {
            return await browser.execute(() => document.readyState === 'complete');
        }, {
            timeout: 10000,
            timeoutMsg: 'Page did not load within 10 seconds'
        });
    });

    // Test case 1: Accept cookies and verify Overview text
    it('should accept cookies and verify the Overview text', async () => {
        await HomePage.clickAcceptCookies(); // Click the accept cookies button
        await pause(1000); // Pause for UI updates
        
        const text = await HomePage.getOverviewText(); // Fetch the Overview text
        console.log('Overview Text:', text);

        expect(text).toEqual('Overview'); // Verify text matches the expected value
    });

    // Test case 2: Verify Safe Space heading and title text are the same
    it('should verify that Safe Space heading and title text match', async () => {
        const headerText = await HomePage.getSafeSpaceHeadingText();
        const titleText = await HomePage.getSafeSpaceTitleText();

        console.log('Safe Space Header Text:', headerText);
        console.log('Safe Space Title Text:', titleText);

        expect(headerText).toBe(titleText); // Verify both texts match
    });

    // Test case 3: Click the first scroll button and verify the second lifesaver text
    it('should click the first scroll button and verify the second lifesaver text', async () => {
        await HomePage.clickFirstScrollButton(); // Click the first scroll button
        await waitForElementToBeDisplayed(HomePage.partialTextAfterClick);

        const text1 = await HomePage.getSecondLifesaverText();
        expect(text1).toContain('Our most acclaimed'); // Verify the expected text
        console.log('Second Lifesaver Text:', text1);
    });

    // Test case 4: Verify the second button is not highlighted before interaction
    it('should verify that the second button is not highlighted before any interaction', async () => {
        const isButtonDisabled = await HomePage.isSecondButtonDisabled();
        expect(isButtonDisabled).toBe(true); // Ensure button is initially disabled
    });

    // Test case 5: Get all recharge model button texts and print them
    it('should print all recharge model button texts', async () => {
        await HomePage.getAllRechargeModelButtonTexts(); // Log all button texts
    });

    // Test case 6: Check if "Crossover (1)" text is present in the list
    it('should check if "Crossover (1)" text is present in the list of recharge models', async () => {
        const isPresent = await HomePage.isCrossoverButtonTextPresent();
        if (isPresent) {
            console.log('"Crossover (1)" text is present in the list');
        } else {
            console.log('"Crossover (1)" text is NOT present in the list');
        }
        expect(isPresent).toBe(true); // Ensure the button text is found
    });

    // Test case 7: Click carousel scroll button until it is disabled
    it('should click the carousel button until it is disabled', async () => {
        await HomePage.clickCarouselButtonUntilDisabled(5); // Click up to 5 times
    });

    // Test case 8: Verify Safe Space button behavior after clicking
    it('should verify Safe Space button behavior after clicking', async () => {
        const isVisible = await HomePage.safeSpaceHeadingText.isDisplayed(); // Check visibility
        expect(isVisible).toBe(true); // Ensure Safe Space heading is visible
    });
});
