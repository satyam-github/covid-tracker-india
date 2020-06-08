import React from 'react';

const DisplayResources = (props) => {
    return (
        <div className="container d-flex flex-wrap flex-row justify-content-around mt-3">
            {props.stateResources.map(resource => (
                <div className="card card-body border-info mb-3"  
                    key={resource.recordid}
                    style={{width: "28rem"}}>
                    <dl className="row">
                        <dt className="col-sm-3">Support:</dt> 
                        <dd className="col-sm-9">{resource.category}</dd>
                        <dt className="col-sm-3">Description:</dt> 
                        <dd className="col-sm-9">{resource.descriptionandorserviceprovided}</dd>
                        <dt className="col-sm-3">Organisation:</dt> 
                        <dd className="col-sm-9">{resource.nameoftheorganisation}</dd>
                        <dt className="col-sm-3">City:</dt> 
                        <dd className="col-sm-9">{resource.city}</dd>
                        <dt className="col-sm-3">Contact:</dt> 
                        <dd className="col-sm-9">{resource.phonenumber}</dd>
                        <dt className="col-sm-3">Link:</dt> 
                        <dd className="col-sm-9"><a href={resource.contact}>{resource.contact}</a></dd>
                    </dl>
                </div>
            ))}
        </div>
    )
} 

export default DisplayResources;