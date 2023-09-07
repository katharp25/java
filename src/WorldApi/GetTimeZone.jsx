import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const GetTimeZone =() => {

    const [timeData, setTimeData] = useState({});
    const { area } = useParams();
    const {timezone} = useParams();

    console.log(area);

    useEffect(() => {
        axios({
            method:'get',
            url:`https://worldtimeapi.org/api/timezone/${area}/${timezone}`
        }).then(res => {
            console.log(res.data);
            setTimeData(res.data);
        })
    },[area]);

    

    return(
        <div>
            <div className="card w-50" style={{marginLeft:'300px', marginTop:'100px'}}>
                <div className="card-header">
                    <h3 className="text-center text-primary">Time Zone Details</h3>
                </div>
                <div className="card-body">
                    <dl>
                        <dt>Date Time</dt>
                        <dd>{timeData.datetime}</dd>
                        <dt>Day Of Week</dt>
                        <dd>{timeData.day_of_week}</dd>
                        <dt>Day Of Year</dt>
                        <dd>{timeData.day_of_year}</dd>
                        <dt>Timezone</dt>
                        <dd>{timeData.timezone}</dd>
                        <dt>Week Number</dt>
                        <dd>{timeData.week_number}</dd>
                    </dl>
                </div>
                <div className="card-footer">
                <h4 className="text-center">Thank You...</h4>
            </div>
            </div>
            
        </div>
    )
}

export default GetTimeZone;