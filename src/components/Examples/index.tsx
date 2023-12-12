import React from 'react'


function ExampleThree() {

  return (
    <form >
      <div data-testid= "custom-element">test custom element</div>
      <div>
      <label htmlFor="job-location">job location</label>
        <input type="text" id="job-location" />
      </div>
      <div>

        <select name="job-location" >
          <option value="us">usa</option>
          <option value="fr">france</option>
          <option value="uk">united kingdom</option>
          <option value="ca">canada</option>
        </select>
      </div>
      <div>
        <button>submit</button>
      </div>
    </form>
  )
}

export default ExampleThree