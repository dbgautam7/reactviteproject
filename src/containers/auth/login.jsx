// eslint-disable-next-line
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Divider, Input } from "antd";
import {
  MailOutlined,
  ArrowRightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import image from "../../images/register.png";
import googlePlay from "../../images/googlePlay.png";
import AntdCheckbox from "../../components/antdCheckbox";
import ForgotPassword from "./forgotPassword";
import TogglePassword from "../../components/hideShowPassword/togglePassword";
import MySlider from "../../components/slider";

const Login = () => {
  const usersSchema = Yup.object().shape({
    usernameOrEmail: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Must be 50 characters or less")
      .required("Required"),

    password: Yup.string()
      .min(5, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });

  return (
    <div className="h-screen p-16 w-full bg-gray-200">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col items-center justify-center justify-between w-full h-full max-md:hidden">
          <img src={image} alt="img" className="h-60 w-60" />
          <MySlider />
          <div className="flex flex-row items-center justify-center mt-2 ">
            <p className="bg-[#FFFFFF] flex items-center p-3 rounded-md">
              Also, get our mobile app
              <Link to="https://play.google.com/store">
                <img
                  src={googlePlay}
                  alt="googleplay"
                  className="w-24 h-12 items-center ml-2"
                />
              </Link>
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center w-full h-full">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Create your Account</h3>
            <Formik
              initialValues={{
                usernameOrEmail: "",
                password: "",
              }}
              validationSchema={usersSchema}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col space-y-4">
                  <div>
                    <Field
                      name="Email"
                      type="email"
                      placeholder="Username/Email"
                      as={Input}
                      prefix={
                        <span>
                          <UserOutlined />/
                          <MailOutlined />
                        </span>
                      }
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-400"
                    />
                    {errors.email && touched.email ? (
                      <div className="text-red-500">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="flex items-center">
                    <TogglePassword />
                    {errors.password && touched.password ? (
                      <div className="text-red-500">{errors.password}</div>
                    ) : null}
                  </div>
                  <div className="flex flex-row">
                    <AntdCheckbox />
                    <Link to="/forgotPassword">
                      <ForgotPassword />
                    </Link>
                  </div>
                  <button className="bg-blue-500 text-white font-bold rounded-lg py-2 px-4 hover:bg-blue-700 transition-colors duration-300">
                    Sign In <ArrowRightOutlined />
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="mt-3">
            <Divider orientation="center" plain>
              or continue with
            </Divider>
            <div className="flex flex-row items-center justify-center">
              <Link to="https://www.facebook.com/">
                <FaFacebook className="text-blue-500 mr-12" size={30} />
              </Link>
              <Link to="https://www.google.com/">
                <FcGoogle size={30} />
              </Link>
            </div>

            <div className="mt-4 text-center">
              <span className="text-gray-500">
                Don't have an account?{" "}
                <Link to="/" className="text-blue-500 hover:underline">
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
