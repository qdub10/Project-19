import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';
import questions from '../fixtures/questions.json';

describe('Quiz Component Tests', () => {
    beforeEach(() => {
      mount(<Quiz questions={questions} />);
    });
  
    it('renders the start button', () => {
      cy.contains('Start').should('be.visible');
    });
  
    it('starts the quiz when the start button is clicked', () => {
      cy.contains('Start').click();
      cy.contains(`Question 1`).should('be.visible');
    });
  
    it('displays the next question after answering the current question', () => {
      cy.contains('Start').click();
      cy.contains('Question 1').should('be.visible');
      cy.get('button').contains('Next').click();
      cy.contains('Question 2').should('be.visible');
    });
  
    it('shows the final score after completing the quiz', () => {
      cy.contains('Start').click();
      for (let i = 1; i <= questions.length; i++) {
        cy.get('button').contains('Next').click();
      }
      cy.contains('Your final score is').should('be.visible');
    });
  });

  