import React from 'react';


// Functional Component
// Stateless
// Dumb
// Representational
function InputSearch(props) {

    return (

        <form className="InputSearch">
            {/* <label htmlFor="">Search user by username</label> */}
            <div>
                <div class="card" style="width: 18rem;"> </div>
                <div class="card-header">
                    Search
            </div>
                {/* <input type="text" placeholder="Enter Topic of Interest" onChange={props.onHandleChange} />
         <input type="text" placeholder="Enter Start Year" onChange={props.onHandleChange} />
         <input type="text" placeholder="Enter End Year" onChange={props.onHandleChange} /> */}
            </div>

            {/* <div class="card-body">   
      <div class="card text-center">
    <div class="card-header">
      <h2 class="card-title">Search</h2>
       </div>
     </div>
        */}

            {/* <div class="card" style="width: 18rem;"> </div> 
          <div class="card-header">
            Search
        </div> */}

            <div>
                <p class="card-text">Enter search information below</p>

                <select class="form-control" onChange={props.onHandleChange}>
                    <option>Topic of Interest</option>
                </select>

                <select class="form-control" onChange={props.onHandleChange}>
                    <option>Start Year</option>
                </select>

                <select class="form-control" onChange={props.onHandleChange}>
                    <option>End Year</option>
                </select>

                <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                    Search
            </button>

                <button className="btn btn-primary" onClick={props.searchsearchTopic} >Search</button>

            </div>

        </form>

    )

};
export default InputSearch;