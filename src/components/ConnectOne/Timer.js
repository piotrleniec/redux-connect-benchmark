import React from 'react'

export default class extends React.Component {
  componentDidMount() {
    const incrementValue = () => {
      this.props.incrementTimerValue(this.props.id)

      this.timeoutId = setTimeout(incrementValue, this.props.delay)
    }

    this.timeoutId = setTimeout(incrementValue, this.props.delay)
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
  }

  render() {
    return (
      <div className="timer">
        <p>Value: {this.props.value}</p>
        <p>Delay: {this.props.delay}</p>
      </div>
    )
  }
}
