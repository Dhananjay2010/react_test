import React, { Fragment } from "react";
import Search from "./Search"
import Dropdownbreed from "./Dropdownbreed"
import Dropdownanimal from "./Dropdownanimal"
import Table from "./Table"
import Submit from "./Submit"
function App() {
  return (
    <React.Fragment>
      <div className="row p-4">
        <div className="col-3">
          <Search />
        </div>
        <div className="col-1">
          <Dropdownbreed />
        </div>
        <div className="col-1">
          <Dropdownanimal/>
        </div>
        <div className="col-1">
          <Submit/>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-8">
          <Table/>
        </div>
      </div>

    </React.Fragment>
  )
}

export default App;
