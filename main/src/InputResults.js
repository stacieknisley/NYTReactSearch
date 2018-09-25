import React from 'react';


function InputResults(props) {
    return (

        <form className="InputResults">

            <div>
                <div class="card text-center">
                    <div class="card-header">
                        <h2 class="card-title">Results</h2>
                    </div>
                </div>


                <div>
                    <ul class="list-group">

                        <li class="list-group-item d-flex justify-content-between align-items-center" onChange={props.onHandleChange}>

                            <span className="badge badge-primary badge-pill">Save</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center" onChange={props.onHandleChange}>

                            <span className="badge badge-primary badge-pill">Save</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center" onChange={props.onHandleChange}>

                            <span className="badge badge-primary badge-pill">Save</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center" onChange={props.onHandleChange}>

                            <span className="badge badge-primary badge-pill">Save</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center" onChange={props.onHandleChange}>

                            <span className="badge badge-primary badge-pill">Save</span>
                        </li>

                    </ul>
                </div>

                <div>
                    <button className="badge badge-primary badge-pill" onClick={props.searchsearchTopic} >Save</button>
                </div>

</form>


            )
         };
            
export default InputResults