import FeedbackActions from './FeedbackActions/FeedbackActions';
import FeedbackResult from './FeedbackResult/FeedbackResult';
import Notification from './Notification/Notification';
import Section from 'components/Section/Section';
import css from './Feedback.module.css';
import { useState } from 'react';

const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = option => {
    setState(prevState => {
      const value = prevState[option];

      return {
        ...prevState,
        [option]: value + 1,
      };
    });
  };

  const { good, neutral, bad } = state;
  const total = good + neutral + bad;

  const calcPercent = () => {
    const value = state.good;
    if (!total) {
      return 0;
    }
    const result = Math.round((value / total) * 100);
    return result;
  };

  const goodPercent = calcPercent();

  return (
    <div className={css.feedback}>
      <Section title="Please leave feedback">
        <FeedbackActions
          leaveFeedback={leaveFeedback}
          feedbackOptions={Object.keys(state)}
        />
      </Section>

      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <FeedbackResult
            total={total}
            goodPercent={goodPercent}
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
          />
        </Section>
      )}
    </div>
  );
};

export default Feedback;
