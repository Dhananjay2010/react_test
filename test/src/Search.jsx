import React from "react"

class Search extends React.Component {
    state: {
        currinput:"";
    }

    render() {
        return (
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="City.." onChange={(e)=>{
                    this.setState({
                        currinput:e.currentTarget.value
                    })
                }}></input>
            </div>
        )
    }
}

export default Search