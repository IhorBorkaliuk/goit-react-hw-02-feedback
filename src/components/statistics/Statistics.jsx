import PropTypes from 'prop-types';
import { WrapStat, TextStat } from './StatisticsStyled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <WrapStat>
      <TextStat>Good: {good}</TextStat>
      <TextStat>Neutral: {neutral}</TextStat>
      <TextStat>Bad: {bad}</TextStat>
      <TextStat>Total: {total}</TextStat>
      <TextStat>Positive feedback: {positivePercentage}%</TextStat>
    </WrapStat>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}
