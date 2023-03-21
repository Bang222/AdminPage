import {Pie} from "react-chartjs-2";

const PieChart = (props) => {
    const {listAllCategories} = props
    const state = {
        labels: ["Total Categories","user Categories"],
        datasets: [
            {
                label: "Total Categories",
                backgroundColor: [
                    '#DC143C',
                    '#0000CD',
                ],
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 2,
                data: [listAllCategories.length, 2]
            }
        ]
    }
    console.log("check data ",listAllCategories)
    const options = {
        plugins: {
            legend: {
                display: true,
                position: "bottom"
            },
            title: {
                text: "Chart Manager Categories",
                display: true,
                fontSize: 20
            }
        }
    }
    return(
        <>
            <Pie
                data={state}
                options={options}
            />
        </>
    )
}
export default PieChart