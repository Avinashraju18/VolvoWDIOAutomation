Volvo Automation Framework

Overview

This documentation provides an overview of the Volvo Automation Framework for end-to-end testing of the Volvo Cars website. It includes the steps to set up the environment, run the tests, and generate reports.

The framework is built with the Macho Framework and uses WebDriverIO for automation. It also integrates Allure for reporting and supports parallel test execution to optimize test performance.

Prerequisites:

Before setting up the framework, ensure that you have the following tools installed on your system:

Docker: Used for containerization and managing the test environment.
Node.js: Required to run the automation tests.
Macho Framework: The test automation framework for managing test execution and reporting.
WebDriverIO: Provides the core functionality for browser automation.
Allure: Open-source reporting tool to generate visually appealing test reports.

Framework Overview

The Volvo Automation Framework is structured to provide scalability, maintainability, and ease of use for automating UI tests. Here is a breakdown of the key components:

1. Basic Setup for Logic

The basic setup includes the initial configurations required to run the automation tests. The logic is structured to handle different test scenarios, utilize reusable functions, and provide a robust test execution pipeline.

2. Spec Files for Test Logic

Test cases are written in spec files, where the logic of test execution is defined. These spec files are organized in a way that makes them easy to maintain and extend as needed. The tests follow the Macho Framework conventions for setup, teardown, and execution.

3. Page Object Model (POM) for Selectors

We use the Page Object Model (POM) pattern to organize all selectors (locators) in separate page objects. This makes the code more maintainable and scalable, as locators are centrally managed, and updates to them only need to be made in one place.

For example, the HomePage object stores all the locators and methods related to the home page, making the test logic cleaner and more readable.

4. Environment Configuration for Test and Production URLs

An environment configuration file has been added to the project. This file defines the URLs for both the test and production environments. The environment setup allows for easy switching between different environments while running the tests.

5. Local Browser Setup for Parallel Test Execution

The framework supports parallel test execution through a local browser configuration, which speeds up the testing process by running multiple tests at the same time in separate browser instances.

6. Reporting with Allure

The framework integrates Allure for test reporting. Allure generates a detailed and user-friendly report that allows easy visualization of the test execution results.

Steps to Run the Tests

Follow these steps to set up and run the automation tests on your local machine:

1. Clone the Repository

First, clone the repository to your local machine:

git clone <repository-url>
cd <repository-folder>

2. Install Dependencies

Navigate to the project directory and install the required dependencies using npm:

npm install

3. Run the Tests

To run the tests for a specific environment, use one of the following commands:

For the devVolvo environment (local development environment):

npm run test:Homepage

For the testVolvo environment (testing environment):

npm run test:Homepagetest

For running individual tests (optional):

npm run test:individual

For local browser-based tests (optional):

npm run test:local

4. Generate the Allure Report

After running the tests, generate a detailed Allure report to view the results:

allure serve allure-results

This will open a web server to display the test results in a user-friendly report format. The report will contain details like:

Test case names

Status of each test (Passed/Failed)

Logs for each test step

Screenshots and videos (if enabled)

5. Run the Tests in Docker (Optional)

If you are running the tests in a Docker container for better isolation, use the following commands to run tests in a Dockerized environment:

Run tests on devVolvo environment inside Docker:

npm run test:devVolvo

Run tests on testVolvo environment inside Docker:

npm run test:testVolvo

6. View Test Results

Once the tests have completed, open the generated Allure report to view the results.

Notes

Environment Configuration: Ensure that the environment configuration file (environment.js) is properly set up with the correct URLs for your test and production environments.

Parallel Test Execution: Parallel test execution requires multiple browser instances to be set up on your local machine or within a Docker container. If running in Docker, ensure your setup is properly configured for this.

Allure Reporting: If you encounter issues with Allure, ensure it is properly installed and set up according to the official Allure documentation.

Framework Extensions: You can extend the framework by adding new page objects, utility functions, or test cases. Simply follow the modular structure to add new functionality.

Example Commands

Run all tests for the homepage:

npm run test:Homepage

Run the tests in devVolvo environment:

npm run test:devVolvo

Run the tests in testVolvo environment:

npm run test:testVolvo

Generate Allure report:

allure serve allure-results

allure generate allure-results && allure open
 allure generate allure-results --clean && allure open 
