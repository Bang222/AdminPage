import {Col, Container, Row} from "react-bootstrap";
import {Bar, Line} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'


const LineChartUser = (props) => {
    const {getAllUser} = props
    const state = {
        labels: getAllUser.map((item) => item.username),
        datasets: [
            {
                label: "Total Ideas",
                backgroundColor: [
                    '#DC143C',
                    '#0000CD',
                ],
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 2,
                data: getAllUser.map((item) => item.Idiea.length)
            }
        ]
    }
    const options = {
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            },
            title: {
                text: "Chart Manager User Total Ideas",
                display: true,
                fontSize: 20
            }
        }
    }
    return (
        <>
            <Line
                data={state}
                options={options}
            />
        </>

    )
}
export default LineChartUser