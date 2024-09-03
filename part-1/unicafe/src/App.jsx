import { useState } from 'react'

const   StatistcLine = (props) => {
  return (
    <div>{props.text} {props.value}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  if (props.all  === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    ) 
    
  } 
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr><td><StatistcLine text="good" value={props.good} /></td></tr>
          <tr><td><StatistcLine text="neutral" value={props.neutral} /></td></tr>
          <tr><td><StatistcLine text="bad" value={props.bad} /></td></tr>
          <tr><td><StatistcLine text="all" value={props.all} /></td></tr>
          <tr><td><StatistcLine text="average" value={props.average} /></td></tr>
          <tr><td><StatistcLine text="positive" value={props.positive + '%'} /></td></tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total,setTotal] = useState(0)
  const [average, setAverage] = useState(0)


  const goodButton = () => {
    const goodCount = good + 1
    setGood(goodCount)
    setTotal(goodCount + bad + neutral)
    setAverage(average+1)
  }

  const neutralButton = () => {
    const neutralCount = neutral + 1
    setNeutral(neutralCount)
    setTotal(neutralCount + bad + good)
    setAverage(average+0)
  }

  const badButton = () => {
    const badCount = bad + 1
    setBad(badCount)
    setTotal(badCount + good + neutral)
    setAverage(average-1)
  }

  return (

    <div>
      <h1>give feedback</h1>
      <br />
      <Button handleClick={goodButton} text="good" /> 
      <Button handleClick={neutralButton} text="neutral" />
      <Button handleClick={badButton} text="bad" />
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {total} average = {average/total} positive = {(good/total) * 100} />
    </div>
  )
}

export default App