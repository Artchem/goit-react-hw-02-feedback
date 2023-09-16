import React from 'react';
import PropTypes from 'prop-types';

export class Statistics extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    positivePercentage: this.props.positivePercentage,
  };

  handleIncrementGood = () => {
    console.log('Click good');
    this.setState(prevState => ({ good: prevState.good + 1 }));
    this.countTotalFeedback();
    // console.log(this);
  };

  handleIncrementNeutral = () => {
    console.log('Click neutral');
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    this.countTotalFeedback();
    // console.log(this);
  };

  handleIncrementBad = () => {
    console.log('Click bad');
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
    // console.log(this);
  };

  countTotalFeedback() {
    // console.log(this.state.good);
    const totalFeedback = this.state.bad + this.state.good + this.state.neutral;
    this.setState({ total: totalFeedback });
  }

  countPositiveFeedbackPercentage() {
    const countPositive = ((this.state.total + 1) / this.state.good) * 100;
    console.log(this.state.total);
    // this.setState({ positivePercentage: countPositive });
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleIncrementGood}>
          Good
        </button>
        <button type="button" onClick={this.handleIncrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleIncrementBad}>
          Bad
        </button>
        <p>Statistics</p>
        <span>
          Good: <span>{this.state.good}</span>
        </span>
        <span>
          Neutral: <span>{this.state.neutral}</span>
        </span>
        <span>
          Bad: <span>{this.state.bad}</span>
        </span>
        <span>
          Total: <span>{this.state.total}</span>
        </span>
        <span>
          Positive feedback: <span>{this.state.positivePercentage}</span>
        </span>
      </div>
    );
  }
}

// export const Statistics = () => {};
