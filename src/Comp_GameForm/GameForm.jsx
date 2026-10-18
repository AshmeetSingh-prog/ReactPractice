import { renderToStaticMarkup } from "react-dom/server";
import "./GameForm.css"
import { useState } from "react";
function GameForm(props) {
      const [form, setForm] = useState({ gname: "", rating: "", madeYr: "", is_rec: "" });
      function submitHandler(e) {
            e.preventDefault();
            const allFilled = form.gname !== "" && form.rating !== "" && form.madeYr !== "" && form.is_rec !== "";
            if (allFilled) {
                  const finalForm = { ...form };
                  props.sendForm(finalForm)
            }
            else {
                  console.error("Complete the Form");
            }
      }
      function inputHandler(e) {
            const inpName = e.target.name;
            let inpVal = e.target.value;
            setForm((prev) => ({
                  ...prev,
                  [inpName]: inpVal,
            }))
      }
      return (
            <div className="form-container">
                  <h2>Game Review Form</h2>
                  <form onSubmit={submitHandler}>
                        <div className="form-group">
                              <label htmlFor="gname">Enter Name</label>
                              <input type="text" id="gname" name="gname" placeholder="E.g., Super Mario" onChange={inputHandler} value={form.gname} />
                        </div>

                        <div className="form-group">
                              <label htmlFor="rating">Enter Rating</label>
                              <input type="number" id="rating" name="rating" min="1" max="10" placeholder="1-10" onChange={inputHandler} value={form.rating} />
                        </div>

                        <div className="form-group">
                              <label htmlFor="madeYr">Enter Date</label>
                              <input type="date" id="madeYr" name="madeYr" onChange={inputHandler} value={form.madeYr} />
                        </div>

                        <div className="form-group">
                              <span className="label-title">Recommended?</span>
                              <div className="radio-group">
                                    <div className="radio-option">
                                          <input type="radio" name="is_rec" id="isrec1" value="yes" onChange={inputHandler} />
                                          <label htmlFor="isrec1">Yes</label>
                                    </div>
                                    <div className="radio-option">
                                          <input type="radio" name="is_rec" id="isrec2" value="no" onChange={inputHandler} />
                                          <label htmlFor="isrec2">No</label>
                                    </div>
                              </div>
                        </div>

                        <button type="submit" className="submit-btn">Submit</button>
                  </form>
            </div>
      )
}
export default GameForm;