import {Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

const LineChartsIdeas = (props) => {
    const {getAllUser} = props
    const [data, setData] = useState([
        {name: getAllUser.map((item) => item.username)},
        {TotalIdeas: getAllUser.map((item) => item.Idiea.length)}
    ])
    console.log("check data", data)
    return (
       <div>bang</div>
    )
}
export default LineChartsIdeas