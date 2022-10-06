import styles from './styles.module.css'
import React, {useState} from "react";
import {NextPage} from "next";
import Login from "../../business/content/login/login";
import Registrado_modal from "../../business/content/modals/registrado_modal";

const Auth: NextPage = () => {


    return (
        <>
           <div className={styles.general_login}>
               <Login />
           </div>
        </>
    )
}

export default Auth
