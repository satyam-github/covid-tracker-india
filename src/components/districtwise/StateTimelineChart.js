import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';

const StateTimelineChart = (props) => {
 
    const lineChart = {
        labels: props.stateTimelineData.map(state => (state.day)),
        datasets: [
          {
            label: 'Active Cases',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,80,85,1)',
            borderColor: 'rgba(255,0,0,1)',
            borderWidth: 1,
            pointRadius: 1.5,
            data: props.stateTimelineData.map(state => (state.totalConfirmed - state.discharged - state.deaths))
          },
          {
            label: 'Discharged',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,80,85,1)',
            borderColor: 'rgba(0,255,0,1)',
            borderWidth: 1,
            pointRadius: 1.5,
            data: props.stateTimelineData.map(state => (state.discharged))
          },
          {
            label: 'Confirmed',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,80,85,1)',
            borderColor: 'rgba(255,255,0,1)',
            borderWidth: 1,
            pointRadius: 1.5,
            data: props.stateTimelineData.map(state => (state.totalConfirmed))
          },
          {
            label: 'Deaths',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,80,85,1)',
            borderColor: 'rgba(0,0,255,1)',
            borderWidth: 1,
            pointRadius: 1.5,
            data: props.stateTimelineData.map(state => (state.deaths))
          }
        ]
      }

      return (
          <div className="jumbotron mt-2">
              <Line
                data={lineChart}
                options={{
                    title:{
                    display:true,
                    text: `Case Timeline for ${props.stateTimelineData[0].loc}`,
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
                />
          </div>
      )

}

export default StateTimelineChart;