import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';

const DisplayChart = (props) => {

    // backgroundColor: props.stateData.map(state => {
    //     var rgb = [];
    //     for(var i = 0; i < 3; i++)
    //         rgb.push(Math.floor(Math.random() * 255));
    //     return 'rgb('+ rgb.join(',') +')';
    // }),

    const pieChart = {
        labels: props.stateData.map(state => (state.state)),
        datasets: [
            {
                label: 'Covid Cases',
                backgroundColor: props.stateData.map(state => {
                    var rgb = [];
                    for(var i = 0; i < 3; i++)
                        rgb.push(Math.floor(Math.random() * 255));
                    return 'rgb('+ rgb.join(',') +')';
                }),
                // borderColor: 'rgba(0,0,0,1)',
                // borderWidth: 2,
                data: props.stateData.map(state => (state.confirmed))
            }
        ]
    }

    const lineChart = {
        labels: props.nationalTimeline.map(day => (day.date)),
        datasets: [
          {
            label: 'Confirmed Cases',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,255,1)',
            borderWidth: 1,
            pointRadius: 1,
            data: props.nationalTimeline.map(day => (day.totalconfirmed))
          },
          {
            label: 'Active cases',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(255,0,0,1)',
            borderWidth: 1,
            pointRadius: 1,
            data: props.nationalTimeline.map(day => (day.totalconfirmed - day.totalrecovered - day.totaldeceased))
          },
          {
            label: 'Recovered',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,255,0,1)',
            borderWidth: 1,
            pointRadius: 1,
            data: props.nationalTimeline.map(day => (day.totalrecovered))
          },
        ]
      }

    return (

        <div className="jumbotron mt-2">

            <div className="row">
                <div className="col">
                    <Line
                        data={lineChart}
                        options={{
                            title:{
                            display:true,
                            text:'National Timeline',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                   }}
            />

                </div>
                <div className="col">
                    <Pie
                    data={pieChart}
                    options={{
                        title:{
                            display:true,
                            text:'Top 10 States',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}/>

                </div>
            </div>
        </div>
    );
}

export default DisplayChart;