import React, {useEffect, useState} from 'react';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import {Helmet} from 'react-helmet';
import {connect, useDispatch} from 'react-redux';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import {getAllAreas, getAllRoles, loginUser, registerUser} from "../../../actions/userActions";
import {Link} from "react-router-dom";
import {T} from "../../common/partials/trans";
import {useTranslation} from "react-i18next";

function LoginOne(props) {

    const dispatch = useDispatch();
    const {t} = useTranslation();
    let areas = props.areas;
    let roles = props.roles;
    let role_customer = roles.find(item => item.roleKey === "ROLE_CUSTOMER");

    //Login Form inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Register Form inputs
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerFirstName, setRegisterFirstName] = useState("");
    const [registerLastName, setRegisterLastName] = useState("");
    const [registerUserName, setRegisterUserName] = useState("");
    const [registerGender, setRegisterGender] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerAdresses, setRegisterAdresses] = useState([
        {
            area: {},
            line1: "",
            line2: "",
            fullName: "",
            email: "",
            phoneNumber: ""
        }
    ]);
    const [registerPhoneNumbers, setRegisterPhoneNumbers] = useState([
        {
            "phoneNumber": "",
        }
    ]);


    useEffect(() => {
        dispatch(getAllRoles());
        dispatch(getAllAreas());
    }, [dispatch])

    function loginUserForm() {
        dispatch(loginUser(email, password));
    }

    function registerUserForm() {
        dispatch(registerUser(registerEmail, registerFirstName, registerLastName,
            registerUserName, registerPassword, {id: role_customer.id},
            registerAdresses, registerPhoneNumbers, registerGender));
    }

    function handleFieldChange(event) {
        if ("phoneNumber" === event.target.name) {
            let phoneNumbers = [...registerPhoneNumbers];
            phoneNumbers[0][event.target.name] = event.target.value;
            setRegisterPhoneNumbers(phoneNumbers)
        }
        if ("area" === event.target.name) {
            let adresses = [...registerAdresses];
            adresses[0][event.target.name] = {id: event.target.value};
            setRegisterAdresses(adresses)
        } else if (["line1", "line2", "fullName", "email", "phoneNumber"].includes(event.target.name)) {
            let adresses = [...registerAdresses];
            adresses[0][event.target.name] = event.target.value;
            setRegisterAdresses(adresses)
        } else {
            //setState({[event.target.name]: event.target.value});
        }
    }

    return (
        <div className="main">
            <Helmet>
                <title>Flow</title>
            </Helmet>

            <h1 className="d-none">Flow</h1>

            <Breadcrumb title="Login" parent1={["pages", "pages/about"]} adClass="border-0 mb-0"/>

            <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/login-bg.jpg)`}}>
                <div className="container">
                    <div className="form-box">
                        <div className="form-tab">
                            <Tabs selectedTabClassName="show" defaultIndex={0}>
                                <TabList className="nav nav-pills nav-fill">
                                    <Tab className="nav-item">
                                        <span className="nav-link"><T id={"AUTH.SIGNIN"}/></span>
                                    </Tab>

                                    <Tab className="nav-item">
                                        <span className="nav-link"><T id={"AUTH.SIGNUP"}/></span>
                                    </Tab>
                                </TabList>

                                <div className="tab-content">
                                    {/*LOGIN FORM*/}
                                    <TabPanel style={{paddingTop: "2rem"}}>
                                        <div>
                                            <form onSubmit={(e) => {
                                                e.preventDefault();
                                                loginUserForm();
                                            }}>
                                                <div className="form-group">
                                                    <label htmlFor="singin-email-2"> <T id={"AUTH.SIGNIN.USERNAME"}/>*</label>
                                                    <input type="text" className="form-control" id="singin-email-2"
                                                           name="singin-email"
                                                           value={email}
                                                           onChange={(e) => setEmail(e.target.value)}
                                                           required/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="singin-password-2"><T id={"AUTH.SIGNIN.PASSWORD"}/>*</label>
                                                    <input type="password" className="form-control"
                                                           id="singin-password-2" name="singin-password"
                                                           value={password}
                                                           onChange={(e) => setPassword(e.target.value)}
                                                           required/>
                                                </div>
                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>Connexion</span>
                                                        <i className="icon-long-arrow-right"/>
                                                    </button>

                                                    {/*<div className="custom-control custom-checkbox">*/}
                                                    {/*    <input type="checkbox" className="custom-control-input"*/}
                                                    {/*           id="signin-remember-2"/>*/}
                                                    {/*    <label className="custom-control-label"*/}
                                                    {/*           htmlFor="signin-remember-2">Remember Me</label>*/}
                                                    {/*</div>*/}

                                                    {/*<Link to="#" className="forgot-link">Mot de pass oublié ?</Link>*/}
                                                </div>
                                            </form>
                                            {/*<div className="form-choice">*/}
                                            {/*    <p className="text-center">or sign in with</p>*/}
                                            {/*    <div className="row">*/}
                                            {/*        <div className="col-sm-6">*/}
                                            {/*            <Link to="#" className="btn btn-login btn-g">*/}
                                            {/*                <i className="icon-google"></i>*/}
                                            {/*                Login With Google*/}
                                            {/*            </Link>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="col-sm-6">*/}
                                            {/*            <Link to="#" className="btn btn-login btn-f">*/}
                                            {/*                <i className="icon-facebook-f"></i>*/}
                                            {/*                Login With Facebook*/}
                                            {/*            </Link>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                        </div>
                                    </TabPanel>

                                    {/*REGISTER FORM*/}
                                    <TabPanel>
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                            registerUserForm();
                                        }}>
                                            <div className="form-group">
                                                <label htmlFor="register-email-2">
                                                    <T id={"AUTH.SIGNUP.FIRSTNAME"}/>*
                                                </label>
                                                <input type="text" className="form-control" id="register-firstName-2"
                                                       name="register-firstName"
                                                       value={registerFirstName}
                                                       onChange={(e) => setRegisterFirstName(e.target.value)}
                                                       required/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="register-email-2">
                                                    <T id={"AUTH.SIGNUP.LASTNAME"}/>*
                                                </label>
                                                <input type="text" className="form-control" id="register-lastName-2"
                                                       name="register-lastName"
                                                       value={registerLastName}
                                                       onChange={(e) => setRegisterLastName(e.target.value)}
                                                       required/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="register-email-2">
                                                    <T id={"AUTH.SIGNUP.USERNAME"}/>*
                                                </label>
                                                <input type="text" className="form-control" id="register-userName-2"
                                                       name="register-email"
                                                       value={registerUserName}
                                                       onChange={(e) => setRegisterUserName(e.target.value)}
                                                       required/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="register-email-2">
                                                    <T id={"AUTH.SIGNUP.EMAIL"}/>*
                                                </label>
                                                <input type="email" className="form-control" id="register-email-2"
                                                       name="register-email"
                                                       value={registerEmail}
                                                       onChange={(e) => setRegisterEmail(e.target.value)}
                                                       required/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="register-password-2">
                                                    <T id={"AUTH.SIGNUP.PASSWORD"}/>*
                                                </label>
                                                <input type="password" className="form-control" id="register-password-2"
                                                       name="register-password"
                                                       value={registerPassword}
                                                       onChange={(e) => setRegisterPassword(e.target.value)}
                                                       required/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="register-gender-2">
                                                    <T id={"AUTH.SIGNUP.GENDER"}/>
                                                </label>
                                                <select id="register-gender" className="form-control"
                                                        name="gender"
                                                        value={registerGender}
                                                        onChange={(e) => setRegisterGender(e.target.value)}
                                                >
                                                    <option value="MALE">
                                                        {t("AUTH.SIGNUP.GENDER.MALE")}
                                                    </option>
                                                    <option value="FEMALE">
                                                        {t("AUTH.SIGNUP.GENDER.FEMALE")}
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="register-phoneNumber-2">
                                                    <T id={"AUTH.SIGNUP.PHONE"}/>
                                                </label>
                                                <input type="text" className="form-control"
                                                       id="singin-phoneNumber-2"
                                                       name="phoneNumber"
                                                       value={registerPhoneNumbers.phoneNumber}
                                                       onChange={handleFieldChange}
                                                       required/>
                                            </div>

                                            <div className="form-group">
                                                <div className="text-center">
                                                    <label htmlFor="singin-adresses-2">
                                                        <T id={"AUTH.SIGNUP.ADRESSE"}/>
                                                    </label>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-adresse-2">
                                                        <T id={"AUTH.SIGNUP.ADRESSE.LINE1"}/>
                                                    </label>
                                                    <input type="text" className="form-control"
                                                           id="singin-adress-line1-2"
                                                           name="line1"
                                                           value={registerAdresses.line1}
                                                           onChange={handleFieldChange}
                                                           required/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-adresse-2">
                                                        <T id={"AUTH.SIGNUP.ADRESSE.LINE2"}/>
                                                    </label>
                                                    <input type="text" className="form-control"
                                                           id="singin-adress-line2-2"
                                                           name="line2"
                                                           value={registerAdresses.line2}
                                                           onChange={handleFieldChange}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-adresse-2">
                                                        <T id={"AUTH.SIGNUP.ADRESSE.FULLNAME"}/>
                                                    </label>
                                                    <input type="text" className="form-control"
                                                           id="singin-adress-fullname-2"
                                                           name="fullName"
                                                           value={registerAdresses.fullName}
                                                           onChange={handleFieldChange}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-adresse-2">
                                                        <T id={"AUTH.SIGNUP.ADRESSE.EMAIL"}/>
                                                    </label>
                                                    <input type="text" className="form-control"
                                                           id="singin-adress-email-2"
                                                           name="email"
                                                           value={registerAdresses.email}
                                                           onChange={handleFieldChange}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-adresse-2">
                                                        <T id={"AUTH.SIGNUP.ADRESSE.PHONENUMBER"}/>
                                                    </label>
                                                    <input type="text" className="form-control"
                                                           id="singin-adress-phoneNumber-2"
                                                           name="phoneNumber"
                                                           value={registerAdresses.phoneNumber}
                                                           onChange={handleFieldChange}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="register-area-2">
                                                        <T id={"AUTH.SIGNUP.ADRESSE.AREA"}/>
                                                    </label>
                                                    <select id="singin-adress-area-2" className="form-control"
                                                            name="area"
                                                            onChange={handleFieldChange}
                                                    >
                                                        {
                                                            areas &&
                                                            areas.length > 0 &&
                                                            areas.map((area, index) => {
                                                                return (
                                                                    <option key={index}
                                                                            value={area.id}>{area.nameFr}</option>

                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                {/*    ["area", "line1", "line2", "fullName", "email", "phoneNumber"]*/}
                                            </div>


                                            <div className="form-footer">
                                                <button type="submit" className="btn btn-outline-primary-2">
                                                    <span>
                                                        <T id={"AUTH.SIGNUP"}/>
                                                    </span>
                                                    <i className="icon-long-arrow-right"/>
                                                </button>

                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input"
                                                           id="register-policy-2" required/>
                                                    <label className="custom-control-label" htmlFor="register-policy-2">
                                                        <Link to="#"> <T id={"AUTH.SIGNUP.PRIVACY.POLICY"}/></Link>*
                                                    </label>
                                                </div>
                                            </div>
                                        </form>
                                        {/*<div className="form-choice">*/}
                                        {/*    <p className="text-center">or sign in with</p>*/}
                                        {/*    <div className="row">*/}
                                        {/*        <div className="col-sm-6">*/}
                                        {/*            <Link to="#" className="btn btn-login btn-g">*/}
                                        {/*                <i className="icon-google"></i>*/}
                                        {/*                Login With Google*/}
                                        {/*            </Link>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="col-sm-6">*/}
                                        {/*            <Link to="#" className="btn btn-login  btn-f">*/}
                                        {/*                <i className="icon-facebook-f"></i>*/}
                                        {/*                Login With Facebook*/}
                                        {/*            </Link>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default React.memo(LoginOne);
export const mapStateToProps = (state) => ({
    roles: state.user.roles ? state.user.roles : [],
    areas: state.user.areas ? state.user.areas : [],
})

export default connect(mapStateToProps, {getAllRoles})(LoginOne);