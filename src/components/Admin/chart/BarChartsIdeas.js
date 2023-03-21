import {Col, Container, Row} from "react-bootstrap";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'


const BarChartsIdeas = (props) => {
    const {getAllUser} = props
    const state = {
        labels: getAllUser.map((item) =>  item.username),
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
            <Bar
                data={state}
                options={options}
            />
        </>

    )
}
export default BarChartsIdeas