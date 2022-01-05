import React from "react";
import {useState} from "react";
import './App.css';
import CSVReader from 'react-csv-reader';
import {Table, Column} from 'react-virtualized'
import 'react-virtualized/styles.css'
import 'semantic-ui-css/semantic.min.css'
import Chart from "./Chart";

function App() {
    const [data, setData] = useState([]);
    const handleForce = (data, fileInfo) => setData(data);


    const parseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
    };

    return (
        <div className="App">
            <div className="ui card centered" style={{marginTop: '10px'}}>
                <CSVReader
                    cssClass="react-csv-input"
                    label='Wybierz plik CSV z danymi: '
                    onFileLoaded={handleForce}
                    parserOptions={parseOptions}
                />
            </div>
            <div className="ui card centered" style={{width: '800px'}}>
                <Table
                    width={790}
                    height={560}
                    headerHeight={20}
                    rowHeight={30}
                    rowCount={data.length}
                    rowGetter={({index}) => data[index]}>
                    <Column label="Data" dataKey="date" width={100}/>
                    <Column label="Średnia - świat" dataKey="data_mean_global" width={200}/>
                    <Column label="Półkula północna" dataKey="data_mean_nh" width={200}/>
                    <Column label="Półkula południowa" dataKey="data_mean_sh" width={200}/>
                </Table>
            </div>
            <div className="ui card centered" style={{width: '1210px'}}>
                <Chart data={data} />
            </div>
        </div>
    );
}

export default App;