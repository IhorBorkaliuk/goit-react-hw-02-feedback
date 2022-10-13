import { Button, FeedbackWrapper } from './FeedbackOptionsStyled';

export const FeedbackOptions = ({ HandleIncrement }) => {
  return (
    <FeedbackWrapper>
      <Button onClick={() => HandleIncrement('good')}>Good</Button>
      <Button onClick={() => HandleIncrement('neutral')}>Neutral</Button>
      <Button onClick={() => HandleIncrement('bad')}>Bad</Button>
    </FeedbackWrapper>
  );
};