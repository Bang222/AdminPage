import {Col, Container, Row} from "react-bootstrap";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
import {useEffect, useState} from "react";


const BarChartsIdeas = (props) => {
    const {getAllUser,DepartmentName,DepartmentId,listDepartments} = props
    const [users1,setTotalUsersOfDepartment1]=useState("")
    const [users2,setTotalUsersOfDepartment2]=useState("")
    useEffect(() => {
        const data1 = getAllUser.map((item) => item.departmentId ===1&& item.Idiea.length)
        const data2 = getAllUser.map((item) => item.departmentId ===2&& item.Idiea.length)
        // const data3 = getAllUser.map((item) => item.departmentId ===3&& item.Idiea.length)
        console.log(data1)
        let totalUsersDepartments = 0
        let totalUsersDepartment2 = 0
        const totalUsers = (data1) => {
            try {
                data1.map((item) => {
                    if (item !== false) {
                        {
                            totalUsersDepartments++
                        }
                    }
                })
                return totalUsersDepartments
            } catch (err) {
                console.log("Err")
            }
        }
        const totalUsers1 = (data2) => {
            try {
                data2.map((item) => {
                    if (item !== false) {
                        {
                            totalUsersDepartment2++
                            console.log("check",item)
                        }
                    }
                })
                return totalUsersDepartment2
            } catch (err) {
                console.log("Err")
            }
        }
        setTotalUsersOfDepartment1(totalUsers(data1))
        setTotalUsersOfDepartment2(totalUsers1(data2))
    }, [DepartmentId])
    const state = {
        labels: DepartmentName,
        datasets: [
            {
                label: "Total users Department",
                backgroundColor: [
                    '#DC143C',
                    '#0000CD',
                ],
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 2,
                data:[users1,users2]
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