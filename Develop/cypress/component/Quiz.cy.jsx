import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';
import questions from '../fixtures/questions.json';

describe('Quiz Component Tests', () => {
  beforeEach(() => {
    // Mount the Quiz component with the provided questions before each test
    mount(<Quiz questions={questions} />);
  });

  it('renders the start button', () => {
    // Check if the "Start" button is visible on the initial render
    cy.contains('Start').should('be.visible');
  });

  it('starts the quiz when the start button is clicked', () => {
    // Click the "Start" button and check for the first question
    cy.contains('Start').click();
    cy.contains(`Question 1`, { timeout: 10000 }).should('be.visible'); // Added timeout for asynchronous updates
  });

  it('displays the next question after answering the current question', () => {
    // Start the quiz and navigate to the next question
    cy.contains('Start').click();
    cy.contains('Question 1').should('be.visible');
    cy.get('button').contains('Next').click(); // Ensure the "Next" button is clicked
    cy.contains('Question 2', { timeout: 10000 }).should('be.visible'); // Wait for the second question to appear
  });

  it('shows the final score after completing the quiz', () => {
    // Start the quiz and iterate through all the questions
    cy.contains('Start').click();
    questions.forEach((_, index) => {
      // Click the "Next" button for each question
      if (index < questions.length - 1) {
        cy.get('button').contains('Next').click();
      }
    });

    // Verify the final score is displayed after the last question
    cy.contains('Your final score is', { timeout: 10000 }).should('be.visible');
  });
});


  