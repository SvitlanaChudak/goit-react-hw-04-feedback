import React, { Component } from 'react';

import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

import { Container} from './App.styled';

export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0,
    }

onLeaveFeedback = state => {this.setState(prevState => ({[state]: prevState[state] + 1}));}

countTotalFeedback = () => Object.values(this.state).reduce((acc, option) => acc + option, 0);
countPositiveFeedbackPercentage = () => Math.round((this.state.good / this.countTotalFeedback()) * 100 || 0);
  
  render() {

    const { good, neutral, bad } = this.state;

    return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>
        
      {(this.countTotalFeedback() !== 0) ?
        (<Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> 
          </Section>) :
          (<Notification message="There is no feedback"></Notification>)
      }
    </Container>
    )
  }

}
