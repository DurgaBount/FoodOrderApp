import React from "react";

const CustomButton = ({title, type}) => {
    return <div style={{padding:'10px 20px 10px 20px',  backgroundColor: type === 'filled' ? 'red' : 'white' , color: type === 'filled' ? 'white' : 'red',borderRadius:'5px',alignSelf:'flex-start', border : type === 'filled' ? '0 solid red' : '1px solid red'}}>
        {title}

    </div>
}

export default CustomButton