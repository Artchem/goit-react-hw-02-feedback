import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  //   console.log(options);
  return options.map(option => (
    <Button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
      {option}
    </Button>
  ));
};
