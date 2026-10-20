import "./Filter.css"
function Filter(props) {
      function submitHandler(e) {
            props.sendFilterDate(e.target.value)
      }

      return (
            <div className="filter-group">
                  <label htmlFor="filter-year-1" className="filter-label">Select Year</label>
                  <select name="filter-year-1" id="filter-year-1" className="filter-select" onChange={submitHandler} value={props.filterDate}>
                        <option value="all">All</option>
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                  </select>
            </div>
      )
}
export default Filter;