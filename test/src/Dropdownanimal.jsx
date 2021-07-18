import React from "react"

class Dropdownanimal extends React.Component {
    state= {
        Animals: [],
        currAnimal:"Animal"

    }

    componentDidMount(){
        fetch("/animal").then((res)=>{
            return res.json();
        }).then((json)=>{
            this.setState({
                Animals: json
            })
        })
    }

    render() {
        return (

            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {this.state.currAnimal}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {this.state.Animals.map((e)=>{
                        return (
                            <li><a class="dropdown-item" href="#" onClick={()=>{
                                this.setState({
                                    currAnimal:e
                                })
                                this.props.AddAnimal(this.state.currAnimal);
                            }}>{e}</a></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Dropdownanimal;