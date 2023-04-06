import React from 'react'
import { Checkbox } from 'antd';

const AntdCheckbox = () => {

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div>
            <Checkbox onChange={onChange}>Remember me</Checkbox>
        </div>
    )
}

export default AntdCheckbox