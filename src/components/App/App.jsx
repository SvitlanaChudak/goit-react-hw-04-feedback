import { useState } from 'react';

import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';

import { Container} from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);
  
const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = (option) => {
  switch (option) {
      case 'good':
        setGood(prevState =>(prevState + 1));
        break;
      case 'neutral':
        setNeutral(prevState =>(prevState + 1));
        break;
      case 'bad':
        setBad(prevState =>(prevState + 1));
        break;
      default:
        break;
    }
}

const countTotalFeedback = () => good + neutral + bad;;
const countPositiveFeedbackPercentage = () => Math.round((good * 100) / countTotalFeedback() || 0);

    return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
        
      {(countTotalFeedback() !== 0) ?
        (<Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          /> 
          </Section>) :
          (<Notification message="There is no feedback"></Notification>)
      }
    </Container>
    )
  }


