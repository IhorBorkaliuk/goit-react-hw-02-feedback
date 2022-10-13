import { WrapStat, TextStat } from './StatisticsStyled'


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
}