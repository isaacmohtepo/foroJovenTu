import styles from './styles.module.css'
import React, {useState} from "react";
import config from "../../../infrastructure/config";
import {useCookies} from "react-cookie";
import axios from 'axios';

export default function Login() {
    const [hidden, setHidden] = useState(true)
    const [hidden2, setHidden2] = useState(false)
    const [hidden3, setHidden3] = useState(false)
    const [cookies, setCookie] = useCookies(['tenant'])
    const [inputs, setInputs] = useState(
        {
            username: "",
            password: ""
        }
    );

    //Function handle, get de values input's
    const handleChanges = async (evt:any) =>{
        const value = evt.target.value;
        setInputs({
            ...inputs,
            [evt.target.name]: (value)
        });
    }
    //axios.defaults.withCredentials = true;
    //console.log(config.URL)

    function auth(){
        if (inputs.username == config.USERNAME) {
            if (inputs.password == config.PASSWORD) {
                setHidden(false);
                setHidden2(true);
                setHidden3(false);


            } else {
                setHidden3(true);
            }
        } else {
            setHidden3(true);
        }
    }

    const configuration = {
        headers: { Authorization: `Bearer ${config.ACCESS_CSV_TOKEN}` },
        withCredentials: true
    };

    function getCsv(){
        setCookie('tenant', "CCC", {path: '/'});
        const webApiUrl = config.URL+'?form=forojoventu';
        axios.get(webApiUrl, configuration)
            .then(response => {
                response.data
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return(
        <>
            {hidden ? <section>
                <div className={styles.login}>
                    <label>Username:</label>
                    <input onChange={handleChanges} name="username" type="text" className="form-control"/>
                    <br/>
                    <label>Contraseña:</label>
                    <input onChange={handleChanges} name="password" type="password" className="form-control"/>
                    <br/>
                    {hidden3 ?<div className={styles.error}>
                        <p>Credenciales no autorizadas</p><br/>
                    </div>: null}
                    <button onClick={auth} className="btn btn-success">Continunar</button>
                </div>
            </section>: null}

            {hidden2 ? <section>
                <div className={styles.login}>
                    {/*<a type="button" href={config.URL+"?form=forojoventu"} target="__blank"> Download </a>*/}
                    <a type="button" onClick={getCsv} target="__blank" className="btn btn-success"> Download CSV</a>
                </div>
            </section>: null}
        </>
    )
}
