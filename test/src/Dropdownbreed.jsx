import React from "react"

class Dropdownbreed extends React.Component {
    state= {
        Breed: [],
        currBreed:"Breed"
    }

    componentDidMount(){

        fetch("/breed").then(function(res){
            return res.json();
        }).then((json)=>{
            this.setState({
                Breed:json
            })
        })
    }

    render() {
        return (

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {this.state.currBreed}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {this.state.Breed.map((e)=>{
                        return <li><a class="dropdown-item" href="#" onClick={()=>{
                            this.setState({
                                currBreed:e
                            })
                            this.props.AddBreed(this.state.currBreed);
                        }}>{e}</a></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Dropdownbreed;
//////////