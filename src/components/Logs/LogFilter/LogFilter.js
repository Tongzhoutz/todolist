
const LogFilter = ({year, onYearChange}) => {

  const yearChangeHandler = (e) => {
    onYearChange(+e.target.value);
  }

  return (
    <div>
      Year: <select onChange={yearChangeHandler} value={year}>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
      </select>
      
    </div>
  )
}

export default LogFilter;
