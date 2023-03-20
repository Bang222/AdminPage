import {Col} from "react-bootstrap";
import LineChartUser from "../chart/LineChartUser";
import BarChartsIdeas from "../chart/BarChartsIdeas";
import {useEffect} from "react";

const ManagerChart = (props) => {
    const {getAllUser,setAnimationChart,animationChart} = props
    useEffect(() => {
        let checkAnimationBarChart = document.querySelector('.bar-chart')
        let checkAnimationLineChart = document.querySelector('.line-chart')
        const handleClick = () => {
            if (animationChart) {
                checkAnimationBarChart.style.transform = 'translateX(-100%)';
                checkAnimationLineChart.style.transform = 'translateX(0)';
            }
            if (!animationChart) {
                checkAnimationBarChart.style.transform = 'translateX(0)';
                checkAnimationLineChart.style.transform = 'translateX(100%)';
            }
        }
        handleClick()
    }, [animationChart])
    return (
        <>
            <Col className={"line-chart absolute w-full h-[300px] flex justify-center"}>
                <LineChartUser
                    getAllUser={getAllUser}
                />
            </Col>
            <Col className={"bar-chart absolute w-full h-[300px] flex justify-center"}>
                <BarChartsIdeas
                    getAllUser={getAllUser}
                />
            </Col>
        </>
    )
}
export default ManagerChart