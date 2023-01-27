import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Assignment2 = () => {
    const [addarr, setAddarr] = useState([]);
    const [firstname, setFirstname] = useState([]);
    const [lastname, setLastname] = useState([]);

    useEffect(() => {

    }, []);

    function handlefirstname(e) { // function for on change of value firstname
        setFirstname(e.target.value);
    }
    function handlelastname(e) { // function for on change of value lastname
        setLastname(e.target.value);
    }

    function changhandle() { // function to add value 
        setAddarr([
            ...addarr, {
                firstname,
                lastname
            }
        ])
        setFirstname(""); // to make input blank
        setLastname("");
    }
    return (
        <>
    <Navbar/>
    <p></p>
            <div className="d-flex justify-content-center">
                <form className="m-3 p-2">
                    <div className="card card-container" >
                        <div className="mb-1">
                            <label className="form-label">First Name</label>
                            <input type="text" value={firstname} className="form-control" onChange={handlefirstname} required />
                        </div>
                        <div className="mb-1">
                            <label className="form-label">Last Name</label>
                            <input type="text" value={lastname} className="form-control" onChange={handlelastname} required />
                        </div>
                        <div className="mb-1">
                            <button type="button" className="btn btn-primary m-1 p-2" onClick={changhandle} >Add</button>
                        </div>
                    </div>
                </form>
            </div>
            <table className="table table-striped table-hover table-bordered p-3" >
                <tbody>
                    <tr>
                        <td>Sr.No</td>
                        <th>First Name </th>
                        <th>Last Name</th>
                    </tr>
                    {addarr.map((name, sr) => { // used map to iterates through each value
                        return (
                            <tr key={sr}>
                                <td>{sr + 1}</td>
                                <td>{name.firstname}</td>
                                <td>{name.lastname}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};
export default Assignment2;
