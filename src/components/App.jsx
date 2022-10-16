import { Component } from 'react'
import { Section } from './section/Section';
import { Statistics } from './statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';





export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good / total) * 100);
  }

  HandleIncrement = propName => {
    this.setState(prevState => {
      const value = prevState[propName];
      return {
        [propName]: value + 1,
      };
    });
  };

  render() {
    const options = { ...this.state };
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            HandleIncrement={this.HandleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
              <Statistics
              options={options}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
};
