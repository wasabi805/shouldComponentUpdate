import React from 'react';


const MilesPerHour =(props)=>{
    console.log('MPH Renders')

    return(
        <section id={'miles-per-hour'} className={'card mph'} style={{background: 'lime'}}>
            <h2 className={'header'}>M.P.H</h2>
            <div className={'stats'}>
                <h2>{props.mph}</h2> mph
            </div>
        </section>
    )

};

export default MilesPerHour
