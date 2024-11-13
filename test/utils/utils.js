import { browser } from '@wdio/globals';

// Utility function to scroll to an element and click it
export async function scrollToElementAndClick(element) {
    await element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    await element.waitForClickable({ timeout: 5000 });
    await element.click();
}

// Utility function to wait for an element to be displayed
export async function waitForElementToBeDisplayed(element, timeout = 5000) {
    await element.waitForDisplayed({ timeout });
}

// Utility function to pause the execution for a given time
export async function pause(time = 1000) {
    await browser.pause(time);
}

// Utility function to check if an element is enabled (useful for buttons)
export async function isElementEnabled(element) {
    return await element.isEnabled();
}

// Utility function to get text from an element
export async function getElementText(element) {
    return await element.getText();
}

// Utility function to get the background color of an element
export async function getElementBackgroundColor(element) {
    const backgroundColor = await element.getCSSProperty('background-color');
    return backgroundColor.value;
}
