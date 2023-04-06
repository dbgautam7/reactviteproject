import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Field } from "formik";
import { Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';

const TogglePassword = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
                <Field
                    name="password"
                    placeholder="Password"
                    type={passwordVisible ? "text" : "password"}
                    as={Input}
                    prefix={<LockOutlined />}
                    className="px-4 py-2 w-full"
                    suffix={(
                        <span onClick={togglePasswordVisibility} className="cursor-pointer">
                            {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </span>
                    )}
                />
        </>
    )
}

export default TogglePassword