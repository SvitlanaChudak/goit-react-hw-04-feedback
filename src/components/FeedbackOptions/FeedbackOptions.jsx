import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

  return (
      <div>
          
          {Object.keys(options).map(option => (
              <Button key={option} type="button" name={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>
          ))}
          
    </div>
  );
};

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}