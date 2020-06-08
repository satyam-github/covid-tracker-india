import React, { useEffect , Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStateData } from '../../store/actions/states';
import State from './State/State';
import DisplayChart from './DisplayChart';

const Home = (props) => {

    useEffect(() => {
        props.getStateData();
    }, []);

    return (
        <div className="container">
            <DisplayChart stateData={props.stateData.sort(function(a, b) {
                                        return b.confirmed - a.confirmed;
                                    }).slice(1,11)}
                           nationalTimeline={props.nationalTimeline}/>
            <State stateData={props.stateData.slice(1)}/>
        </div>
    );

}

const mapStateToProps = state => ({
    stateData: state.states.stateData,
    nationalTimeline: state.states.countryTimeline,
    loaded: state.states.loaded,
    error: state.states.error
})

const mapDispatchToProps = dispatch => ({
    getStateData: () => dispatch(getStateData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);