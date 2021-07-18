import React from "react"

class Table extends React.Component {
    state = {}


    render() {
        return (

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Animal</th>
                        <th scope="col">Breed</th>
                        <th scope="col">City</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.DataPassed.map((e) => {
                        return (
                            <tr key={e.id}>
                                <th scope="row">{e.name}</th>
                                <td>{e.animal}</td>
                                <td>{e.breed}</td>
                                <td>{e.city}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

}

export default Table