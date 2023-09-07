import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GetTimeZone =() => {

    const [timeData, setTimeData] = useState({});
    const { area } = useParams();

    console.log(area);

    useEffect(() => {
        axios({
            method:'get',
            url:`https://worldtimeapi.org/api/timezone/${area}`
        }).then(res => {
            console.log(res.data);
            setTimeData(res.data);
        })
    },[area]);

    

    return(
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Date Time</th>
                        <th>Day Of Week</th>
                        <th>Day Of Year</th>
                        <th>TimeZone</th>
                        <th>Week Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{timeData.datetime}</td>
                        <td>{timeData.day_of_week}</td>
                        <td>{timeData.day_of_year}</td>
                        <td>{timeData.timezone}</td>
                        <td>{timeData.week_number}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GetTimeZone;