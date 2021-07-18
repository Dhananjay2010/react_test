import React, { Fragment } from "react";
import Search from "./Search"
import Dropdownbreed from "./Dropdownbreed"
import Dropdownanimal from "./Dropdownanimal"
import Table from "./Table"
import Submit from "./Submit"


class App extends React.Component {

  state = {
    allData: [],
    ToBeAdded:{
      "id": 12,
      "name": "",
      "animal": "",
      "city": "",
      "breed": ""
    }
  };

  componentDidMount() {

    fetch("/danimals").then(function (res) {
      return res.json()
    }).then((json) => {
      this.setState({
        allData: json
      })
    })
  }

  addCurrBreed=(breed)=>{
    let obj=this.state.ToBeAdded;
    obj.breed=breed;
    this.setState({
      ToBeAdded:obj
    })
  }

  addCurrAnimal=(animal)=>{
    let obj=this.state.ToBeAdded;
    obj.animal=animal;
    this.setState({
      ToBeAdded:obj
    })
  }

  addCurrCity=(city)=>{
    let obj=this.state.ToBeAdded;
    obj.city=city;
    this.setState({
      ToBeAdded:obj
    })
  }

  AddNewList=()=>{
    let newData=this.state.allData;
    newData.push(this.state.ToBeAdded);

    this.setState({
      allData:newData
    })

    this.setState({
      ToBeAdded:{
        "id": 12,
      "name": "",
      "animal": "",
      "city": "",
      "breed": ""
      }
    })
  }
  


  render() {
    return (
      <React.Fragment>
        <div className="row p-4">
          <div className="col-3">
            <Search AddCity={this.addCurrCity} />
          </div>
          <div className="col-1">
            <Dropdownbreed AddBreed={this.addCurrBreed} />
          </div>
          <div className="col-1">
            <Dropdownanimal AddAnimal={this.addCurrAnimal}/>
          </div>
          <div className="col-1">
            <Submit AddNew={this.AddNewList} />
          </div>
        </div>
        <div className="row p-3">
          <div className="col-8">
            <Table DataPassed={this.state.allData}/>
          </div>
        </div>

      </React.Fragment>
    )
  }


}

export default App;
