import React from 'react'


function ExampleThree() {
  
  return (
    <form >
      <div>
        <label>job location</label>
        <input type="text" />
        
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