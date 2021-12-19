import React from 'react';

const MyComboBox = (props) => {
    return (
        <select onChange={props.onChange} value={props.value}>
            {
                props.options.map((o)=>{
                    return <option value={o}>{o}</option> })
                })
            }
        </select>
    );
};

export default MyComboBox;