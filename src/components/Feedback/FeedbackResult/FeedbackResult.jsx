import PropTypes from 'prop-types';

const FeedbackResult = ({ total, goodPercent, good, neutral, bad }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {goodPercent}%</p>
    </div>
  );
};

export default FeedbackResult;

FeedbackResult.propTypes = {
  total: PropTypes.number,
  goodPercent: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
