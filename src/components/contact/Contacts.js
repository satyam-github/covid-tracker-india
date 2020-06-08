import React, { useEffect , useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { getResources } from '../../store/actions/contacts';
import { getStateData } from '../../store/actions/states';
import DisplayResources from './DisplayResources';

const Contact = (props) => {

    const [stateName, setStateName] = useState('');
    const [inputSelected, setInputSelected] = useState(false);
    const [stateResources, setStateResources] = useState([]);

    useEffect(() => {
        props.getResources();
        props.getStateData();
    }, []);

    const onChange = e => {
        e.preventDefault();
        // console.log(e.target.value);
        setStateName(e.target.value);
        setInputSelected(false);
        // console.log(props.resources);
        // console.log(stateName);
        const stateResourcesUpdate = props.resources.filter(resource => e.target.value === resource.state);
        setStateResources(stateResourcesUpdate);
        setInputSelected(true);
        // console.log(stateResourcesUpdate);
    }

    const states = props.stateData.slice(1).map(state => (<option key={state.state}>{state.state}</option>));

    return (
        <div className="container mt-3">
            <select name="state" className="form-control form-control-lg" id="id1" value={stateName} onChange={e => onChange(e)}>
                <option value="0">* Select your State</option>
                {states}
            </select>
            {inputSelected && <DisplayResources stateResources={stateResources.slice(0,15)} />}
        </div>
        // <div>
        //     <ul>
        //         {props.regional.map(region => (
        //             <li key={region.loc} className={classes.Contact}>
        //                 {region.loc}         {region.number}
        //             </li>
        //         ))}
        //     </ul>
        // </div>
    );

}
 
const mapStateToProps = state => ({
    resources: state.contacts.resources,
    isLoaded: state.contacts.loaded,
    stateData: state.states.stateData,
    error: state.contacts.error
})

const mapDispatchToProps = dispatch => ({
    getResources: () => dispatch(getResources()),
    getStateData: () => dispatch(getStateData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact);