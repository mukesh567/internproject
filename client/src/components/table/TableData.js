import React, { useEffect, useState } from "react";

function TableData(props) {
    const [user, setUser] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:5000/intern")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <>
            <table className={`table table-${props.mode} table-striped`}  >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>Last</th>
                        <th>Buy/Sell Price</th>
                        <th>volume</th>
                        <th>base_unit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((userObj, index) => {
                            return (
                                <tr key={index} className="table-active">
                                    <td>{index+1}</td>
                                    <td>{userObj.name}</td>
                                    <td>{userObj.last}</td>
                                    <td>{userObj.buy}/{userObj.sell}</td>
                                    <td>{userObj.volume}</td>
                                    <td>{userObj.base_unit}</td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default TableData;

