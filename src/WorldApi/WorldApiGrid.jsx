import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


const WorldApiGrid = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://worldtimeapi.org/api/timezone'
        }).then(res => {
            setData(res.data);
        })
    }, []);

    return (
        <div>
            <table className="table table-hover">
                <thead className="text-bg-dark">
                <tr>
                    <th>Sr No.</th>
                    <th>Region</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((time, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{time.split("/")[0]}</td>
                                    <td>{time.split("/")[1]}</td>
                                    <td><Link to={`/${time}`} className="btn btn-primary">Get Time</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default WorldApiGrid;
