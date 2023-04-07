import {Col, Container, Row} from "react-bootstrap";
import {Bar, Line} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
import {useEffect, useState} from "react";


const LineChartUser = (props) => {
    const {getAllUser,listDepartments,DepartmentName} = props
    const [Ideas1,setTotalIdeasOfDepartment1]=useState("")
    const [Ideas2,setTotalIdeasOfDepartment2]=useState("")

    useEffect(() => {
        const data1 = getAllUser.map((item) => item.departmentId === 1 && item.Idiea.length)
        const data2 = getAllUser.map((item) => item.departmentId === 2 && item.Idiea.length)

        const sumIdeas1 = data1.reduce((partialSum, a) => partialSum + a, 0)
        const sumIdeas2 = data2.reduce((partialSum, a) => partialSum + a, 0)
        setTotalIdeasOfDepartment2(sumIdeas2)
        setTotalIdeasOfDepartment1(sumIdeas1)
    },[])
    const state = {
        labels:DepartmentName,
        datasets: [
            {
                label: "Total Ideas",
                backgroundColor: [
                    '#DC143C',
                    '#0000CD',
                ],
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 2,
                data:[Ideas1,Ideas2]
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