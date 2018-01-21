import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: 0 }
    this.timeoutId = null
  }

  componentDidMount() {
    const incrementValue = () => {
      this.setState({ value: this.state.value + 1 })

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
        <p>Value: {this.state.value}</p>
        <p>Delay: {this.props.delay}</p>
      </div>
    )
  }
}
