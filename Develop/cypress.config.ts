import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Replace with your application's URL
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Pattern for end-to-end test files
    supportFile: false, // Adjust if you use a support file
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite', // Use 'webpack' if your project uses Webpack
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}', // Pattern for component test files
  },
  fixturesFolder: 'cypress/fixtures',
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  downloadsFolder: 'cypress/downloads',
});
