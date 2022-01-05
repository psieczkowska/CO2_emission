import {CanvasJSChart} from 'canvasjs-react-charts'

const Chart = ({data}) => {
    let danePoludniowe = []
    let danePolnocne = []
    for (let i = 0; i < data.length; i++) {
        danePoludniowe = [...danePoludniowe, {y: parseFloat(data[i].data_mean_sh), label: data[i].date}]
        danePolnocne = [...danePolnocne, {y: parseFloat(data[i].data_mean_nh), label: data[i].date}]
    }
    const layout = {
        title: {
            text: "CO2 na przestrzeni lat"
        },
        axisY: {
            title: "Poziom CO2",
            minimum: '260',
            maximum: '420'
        },
        backgroundColor: 'white',
        data: [{
            name: "Półkula południowa",
            type: "spline",
            showInLegend: true,
            yValueFormatString: "##0.00",
            dataPoints: danePoludniowe
        },
            {
                name: "Półkula północna",
                type: "spline",
                showInLegend: true,
                yValueFormatString: "##0.00",
                dataPoints: danePolnocne
            }
        ]
    }
    return (
        <div style={{ width: '1200px'}}>
            <CanvasJSChart options={layout}/>
        </div>
    )
}
export default Chart;