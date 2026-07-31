import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  )
}

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  const all = props.good + props.neutral + props.bad
  const average = ((props.good - props.bad) / all).toFixed(1)
  const positive = (props.good / all * 100).toFixed(1)
  return (
    <>
      <Header text="statistics" />
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
        </tr>
        <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
        </tr>
        <tr>
            <td>bad</td>
            <td>{props.bad}</td>
        </tr>
        <tr>
            <td>all</td>
            <td>{all}</td>
        </tr>
        <tr>
            <td>average</td>
            <td>{average}</td>
        </tr>
        <tr>
            <td>positive</td>
            <td>{positive} %</td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
