import React from 'react';
import { Statis } from './Statistics.styled';

export class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    // console.log(this.props);
    return (
      <Statis>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>Positive feedback: {positivePercentage}%</span>
      </Statis>
    );
  }
}
