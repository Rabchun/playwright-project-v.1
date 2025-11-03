# playwright-project-v.1

**Structure:**

<img width="496" height="252" alt="image" src="https://github.com/user-attachments/assets/19da4a12-9fe7-40b4-9bf1-7e0376cca92b" />







**1. Prerequisites**

Ensure you have the following installed:

[Node.js](https://nodejs.org/)
 ≥ 18.x

npm ≥ 9.x or yarn/pnpm

Git (optional, for version control)

**2. Clone the Repository**
`git clone` 
cd repmove-auth-tests

**3. Install Dependencies**
`npm install`


_(Installs Playwright, TypeScript, and test dependencies.)_

**4. Install Browsers**
`npx playwright install`


_(Downloads Chromium, Firefox, and WebKit for testing.)_



**Work with tests:** 

Run all tests (headless mode)
`npx playwright test`

Run tests with UI (headed mode)
`npx playwright test --headed`

Run a specific file
npx playwright test tests/auth/login.spec.ts

Run a single test by name
`npx playwright test -g "Valid login"`

View HTML report

After any test run, open the HTML report:

`npx playwright show-report`
