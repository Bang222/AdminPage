import {Line, Pie} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
import {Col, Row} from "react-bootstrap";

const PieChart = (props) => {
    const {listAllCategories} = props
    const state = {
        labels: ["Total Categories", "user Categories"],
        datasets: [
            {
                label: "Total Categories",
                backgroundColor: [
                    '#DC143C',
                    '#0000CD',
                ],
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 3,
                data: [listAllCategories.length, 2]
            }
        ]
    }
    // console.log("check data ",listAllCategories)
    const options = {
        plugins: {
            legend: {
                display: true,
                position: "bottom",
            },
            title: {
                text: "Chart Manager Categories",
                display: true,
                fontSize: 20
            }
        }
    }
    return (
        <>
            <Row className={""}>
                <Col className="flex justify-center w-[300px] h-[300px]" >
                    <Pie
                        data={state}
                        options={options}
                    />
                </Col>
            </Row>
        </>
    )
}
export default PieChart