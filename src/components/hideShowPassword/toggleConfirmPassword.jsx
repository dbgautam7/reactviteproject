import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { Field } from "formik";
import { Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';

const ToggleConfirmPassword = () => {

    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <>
            <Field
                name="Confirm Password"
                placeholder="Confirm Password"
                type={confirmPasswordVisible ? "text" : "password"}
                as={Input}
                prefix={<LockOutlined />}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-400"
                suffix={(
                    <span onClick={toggleConfirmPasswordVisibility} className="cursor-pointer">
                        {confirmPasswordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </span>
                )}
            />
        </>


    )
}

export default ToggleConfirmPassword