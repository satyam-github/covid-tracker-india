import React, { useEffect , Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import StateTimelineChart from './StateTimelineChart';
import { getDistricts, getStateTimeline } from '../../store/actions/districts';

const Districts = (props) => {

    useEffect(() => {
        props.getDistricts(props.match.params.id);
        props.getStateTimeline(props.match.params.id);
        // console.log(props.districtData);
    }, []);

    return (
        <div className="container">
            {props.stateTimelineLoaded && 
                <StateTimelineChart stateTimelineData = {props.stateTimelineData} />}
            <div className="d-flex flex-wrap flex-row justify-content-between">
                {props.districtDataLoaded && props.districtZonesLoaded && Object.entries(props.districtData).map(district => (
                    <div key={district[0]} 
                        className="card border-info mb-3"
                        style={{width: "16rem"}}>
                            <h5 className="card-header">{district[0]}</h5>
                            <div className="card-body text-info">  
                                {/* <div className="card-text"> */}
                                    <table className="table table-borderless table-sm">
                                        <tbody>
                                            <tr><td>Confirmed:</td> <td>{district[1].confirmed}</td></tr>
                                            <tr><td>Active:</td> <td>{district[1].active}</td></tr>
                                            <tr><td>Recovered:</td> <td>{district[1].recovered}</td></tr>
                                            <tr><td>Deaths:</td> <td>{district[1].deceased}</td></tr>
                                        </tbody>
                                    </table>
                                    <button className={props.districtZones[district[0]] === "Red"
                                                            ? "btn btn-danger"
                                                            : (props.districtZones[district[0]] === "Orange"
                                                                ? "btn btn-warning"
                                                                : "btn btn-success")} >
                                        {props.districtZones[district[0]]
                                            ? props.districtZones[district[0]] + " Zone"
                                            : 'Not Applicable'}
                                    </button>
                                {/* </div> */}
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

const mapStateToProps = state => ({
    districtData: state.districts.districtData,
    districtDataLoaded: state.districts.districtDataLoaded,
    districtDataError: state.districts.districtDataError,
    districtZones: state.districts.districtZones,
    districtZonesLoaded: state.districts.districtZonesLoaded,
    stateTimelineData: state.stateTimeline.stateTimelineData,
    stateTimelineLoaded: state.stateTimeline.stateTimelineLoaded
})

const mapDispatchToProps = dispatch => ({
    getDistricts: (stateName) => dispatch(getDistricts(stateName)),
    getStateTimeline: (stateName) => dispatch(getStateTimeline(stateName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Districts);