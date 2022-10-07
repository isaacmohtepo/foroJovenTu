import styles from './styles.module.css'
import React, {useState} from "react";
import {MultiSelect} from "react-multi-select-component";
import {str2bool, useData, useMoreInfo} from "../../../service/services";
import stateService from "../../../service/services";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Registrado_modal from "../modals/registrado_modal";
import Campos_faltante from "../modals/campos_faltante";
export default function Registrate() {
    const [textButton, setTextButton] = useState('Siguiente')
    const [displayNone, setDisplayNone] = useState('none')
    const [displayBlock, setDisplayBlock] = useState('block')
    const [dataCol, dataLatam, optionsYears, optionValues, optionTopic, state, setState] = useData()
    let [hidden, hidden3, hidden4, hiddenEmp] = useMoreInfo()
    const dpto: Array<[]> = [];
    const cities: any[] = [];
    const [selectedYears, setSelectedYears] = useState([])
    const [selectedTopic, setSelectedTopic] = useState([])
    const [newHidden, setNewHidden] = useState(false)
    const newDate = new Date().toJSON();

    const Years: any[] = [];
    const topics: any[] = [];
    //Save de years and topic in Array
    selectedYears.map((sely:any) => (
        Years.push(sely.value)
    ));
    selectedTopic.map((stopic:any) => (
        topics.push(stopic.value)
    ));

    const changeTextButton = () => {
        if (textButton === 'Siguiente' && (state.nameIn && state.ccIn && state.emailIn && state.verifyEamil
            && state.cellphoneIn && state.countryIn)) {
            setTextButton('Anterior')
            setDisplayNone('block')
            setDisplayBlock('none')
            setNewHidden(false)
        } else {
            state.show = true;
            setNewHidden(true)
            setTextButton('Siguiente')
            setDisplayNone('none')
            setDisplayBlock('block')
        }

    }

    const displayN = {
        display: `${displayNone}`,
        transaction: '1s'
    }
    const displayB = {
        display: `${displayBlock}`,
        transaction: '1s'
    }

    //Init the save to form
    const initSavePostForm = {
        tenant: "CCC",
        form_ref: "forojoventu",
        created_at: newDate,
        comm_pref: ["email"],
        form_data: {name: state.nameIn, type_cc:state.type_ccIn, cc:state.ccIn, email: state.emailIn, cellphone: state.cellphoneIn,
            country: state.countryIn, city: state.cityIn, first_time: state.first_timeIn, years_assisted: Years,
            topic_to_learn: topics, emprendour: state.emprendourIn, entrepreneurship_bussines: state.entrepreneurship_bussinesIn,
            entrepreneurship_phase: state.entrepreneurship_phaseIn, interest_more_info: state.interest_more_infoIn,
            know_your_entity:state.know_your_entityIn, expected_event: state.expected_eventIn, assitance_to_next_event: state.assitance_to_next_eventIn,
            data_protection: state.data_protectionIn
        }
    };
    //Function handle, get de values input's
    const handleChange2 = async (evt:any) =>{
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: str2bool(value)
        });
    }
    //console.log(topics)
    //Get departments if the country is Colombia
    if(state.countryIn == "Colombia"){
        hidden = true;
        if(state.dptoIn == "Bolívar"){
            cities.push('Cartagena');
        }
    }else{
        hidden = false;
    }

    //GET DEPARTAMENTOS AND CITIES
    const getDptos = async () =>{
        for(let d = 0;d < dataCol.length;d++){

            if(dpto.includes(dataCol[d]['departamento'])){

            }else{
                dpto.push(dataCol[d]['departamento']);

            }
        }
        //GET CITIES/MUNICIPIOS
        const selectCity = async () =>{
            for(let m = 0;m < dataCol.length;m++){
                if(dataCol[m]["departamento"] == state.dptoIn){
                    cities.push(dataCol[m]["municipio"]);
                }

            }
        }
        selectCity();
    }
    getDptos();
    //Verification's
    if(state.emailIn != state.verifyEamil){
        hidden3 = true;
    }
    if(state.first_timeIn == false){
        hidden4 = true;
    }else{
        hidden4 = false;
        Years.length = 0;
        Years.push("No he ido a ninguno")
    }
    if(state.emprendourIn?.toLocaleLowerCase() == "si"){
        hiddenEmp = true;
    }
    //Modal view
    function closeModal(){
        state.show = false;

        window.location.reload();
    }
    function closeModal2(){
        state.show = false;
    }

    //Method for Save the Form
    const saveForm = (ev:any) => {

        if(hidden3 == false && (state.data_protectionIn
            && state.know_your_entityIn && state.expected_eventIn && topics)){

            var dt = initSavePostForm;
            stateService.create(dt)
            //console.log(dt)
            state.submitted = true;
            setNewHidden(false);
            ev.preventDefault();
            state.show = true;

        }else{

            if(state.data_protectionIn == false){
                ev.preventDefault();
                alert("¡Debes aceptar la política de uso de datos para registrate!")
            }

            if(hidden3 == true){
                state.submitted = false;
                ev.preventDefault();
                state.show = true;
            }
        }
    };

    return (
        <>
            <div id="registro"></div>
            <section >
                <div className={styles.Registrate}>
                    <div className={styles.title}>
                        <h2>¡Regístr<span>a</span>te!</h2>
                        <h3>¡Si capitán, estamos listos! </h3>
                        <p>Nuestro barco está listo para zarpar y queremos que te embarques con nosotros directo al
                            cambio, <span>¿vamos?</span></p>
                    </div>

                    <div className={styles.container_form}>
                        <form onSubmit={saveForm}>
                            {/* Form Page One */}
                            <div style={displayB} className={styles.form_1}>
                                <div className={styles.item_form}>
                                    <label htmlFor="">¿Cuál es tu nombre completo?</label>
                                    <input className={styles.input}
                                           type="text"
                                           required
                                           value={state.nameIn}
                                           onChange={handleChange2}
                                           name="nameIn"
                                    />
                                </div>
                                <div className={styles.item_form}>
                                    <label htmlFor="">¿Tienes cédula de ciudadanía o tarjeta de identidad?</label>
                                    <select name="type_ccIn" id="type_ccIn" onChange={handleChange2} required>
                                        <option value="Cédula">Cédula de ciudadanía</option>
                                        <option value="Tarjeta de identidad">Tarjeta de identidad</option>
                                    </select>
                                </div>
                                <div className={styles.item_form}>
                                    <label htmlFor="">¿Cuál es el número de tu cédula de ciudadanía/tarjeta de
                                        identidad?
                                    </label>
                                    <input className={styles.input}
                                           type="number"
                                           id="ccIn"
                                           required
                                           value={state.ccIn}
                                           onChange={handleChange2}
                                           name="ccIn"
                                    />
                                </div>
                                <div className={styles.item_form}>
                                    <label htmlFor="">¿Cuál es tu correo?
                                    </label>
                                    <input className={styles.input}
                                           type="email"
                                           id="emailIn"
                                           required
                                           value={state.emailIn}
                                           onChange={handleChange2}
                                           name="emailIn" />
                                </div>
                                <div className={styles.item_form}>
                                    <label htmlFor="">Repite tu correo, por si acaso
                                    </label>
                                    <input className={styles.input}
                                           type="email"
                                           id="verifyEamil"
                                           required
                                           value={state.verifyEamil}
                                           onChange={handleChange2}
                                           name="verifyEamil" />
                                    {hidden3 ? <p style={{color: 'red'}}>¡Los correos no coinciden!</p>: null}
                                </div>
                                <div className={styles.item_form}>
                                    <label htmlFor="">¿Cuál es tu número de celular?</label>
                                    <input className={styles.input}
                                           type="number"
                                           id="cellphoneIn"
                                           required
                                           value={state.cellphoneIn}
                                           onChange={handleChange2}
                                           name="cellphoneIn" />
                                </div>
                                <div className={styles.item_form}>
                                    <label htmlFor="">¿En qué país vives?</label>
                                    <select onChange={handleChange2} id="countryIn" name="countryIn" required>
                                        <option value="">Seleccione país</option>
                                        {dataLatam.sort().map((ltm) => (
                                            <option key={ltm.value} value={ltm.value}>{ltm.label}</option>
                                        ))}
                                    </select>
                                </div>
                                {hidden ?<div>
                                    <div className={styles.item_form}>
                                        <label htmlFor="">¿En qué departamento?</label>
                                        <select onChange={handleChange2} name="dptoIn" className="form-control" required>
                                            <option value="">Seleccione departamento</option>
                                            {dpto.sort().map((dpt:any) => (
                                                <option key={dpt} value={dpt}>{dpt}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={styles.item_form}>
                                        <label htmlFor="">¿En qué ciudad vives?</label>
                                        <select onChange={handleChange2} id="cityIn" name="cityIn" required>
                                            <option value="">Seleccione ciudad</option>
                                            {cities.sort().map((city) => (
                                                <option key={city} value={city}>{city}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>: null}
                            </div>
                            {/* Form Page Two */}
                            <div style={displayN} className={styles.form_2}>
                                <div className={styles.item_form}>
                                    <label htmlFor="">¿Este es tu primer Foro de jóvenes?</label>
                                    <select onChange={handleChange2} name="first_timeIn" id="first_timeIn" required>
                                        <option value="true">Si</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                                {hidden4 ?<div className={styles.item_form}>
                                    <label htmlFor="">¿Qué otros años has
                                        asistido?</label>
                                    <MultiSelect className={styles.multiSelect}
                                                 options={optionsYears}
                                                 value={selectedYears}
                                                 onChange={setSelectedYears}
                                                 labelledBy={"Selecciona"}
                                    />
                                </div>: null}
                                <div className={styles.item_form}>
                                    <label htmlFor="">¿Cuál es el tema del que más te interesa aprender?</label>
                                    <MultiSelect className={styles.multiSelect}
                                                 options={optionTopic}
                                                 value={selectedTopic}
                                                 onChange={setSelectedTopic}
                                                 labelledBy={"Selecciona"}
                                    />
                                </div>
                                <div className={styles.item_form}>
                                    <label htmlFor="">¿Eres emprendedor?</label>
                                    <select onChange={handleChange2} id="emprendourIn" name="emprendourIn" required>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                        <option value="No pero me gustaría serlo">No, pero me gustaría serlo</option>
                                    </select>
                                </div>

                                {hiddenEmp ?<div>
                                    <div className={styles.item_form}>
                                        <label htmlFor="">En caso de que seas emprededor/a, cuéntanos cómo se llama y de qué
                                            se trata.</label>
                                        <textarea
                                            cols={100} rows={3}
                                            value={state.entrepreneurship_bussinesIn}
                                            onChange={handleChange2}
                                            name="entrepreneurship_bussinesIn" required
                                        ></textarea>
                                    </div>
                                    <div className={styles.item_form}>
                                        <label htmlFor="">En caso de que seas emprendedor/a ¿En qué fase se encuentra tu
                                            emprendimiento? </label>
                                        <select onChange={handleChange2} id="entrepreneurship_phaseIn" name="entrepreneurship_phaseIn">
                                            <option value=""></option>
                                            <option value="Ideación">Ideación</option>
                                            <option value="Validación">Validación</option>
                                            <option value="Aceleración">Aceleración</option>
                                        </select>
                                    </div>
                                </div>: null}

                                <div className={styles.item_form}>
                                    <label htmlFor="">¿Te gustaría enterarte de todos los programas que tiene la Cámara
                                        de Comercio de Cartagena para los jóvenes? </label>
                                    <select onChange={handleChange2} id="interest_more_infoIn" name="interest_more_infoIn" required>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                        <option value="Tal vez">Tal vez</option>
                                    </select>
                                </div>

                                <div className={styles.item_form}>
                                    <label htmlFor="">Queremos saber de qué colegio, universidad o entidad vienes,
                                        cuéntanos.</label>
                                    <textarea
                                        name="know_your_entityIn"
                                        cols={100} rows={3}
                                        value={state.know_your_entityIn}
                                        onChange={handleChange2} required
                                    ></textarea>
                                </div>
                                <div className={styles.item_form}>
                                    <label htmlFor="">¿Qué esperas de este evento?</label>
                                    <textarea
                                        cols={100} rows={3}
                                        value={state.expected_eventIn}
                                        onChange={handleChange2}
                                        name="expected_eventIn" required
                                    ></textarea>
                                </div>

                                <div className={styles.item_form}>
                                    <label htmlFor="">¿Confirmas tu asistencia al foro de jóvenes el próximo 29 de
                                        octubre?</label>
                                    <select onChange={handleChange2} name="assitance_to_next_eventIn" id="assitance_to_next_eventIn" className="form-control" required>
                                        <option value="">Seleccione</option>
                                        <option value="true">Si</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>

                                <div className={styles.item_form}>
                                    <label htmlFor="">¿Aceptas el uso de tratamiento de tus datos para fines del
                                        foro?</label>
                                    <select onChange={handleChange2} name="data_protectionIn" id="data_protectionIn" className="form-control" required>
                                        <option value="true">Acepto</option>
                                        <option value="false">No acepto</option>
                                    </select>
                                </div>
                            </div>
                            <div className={styles.boton}>
                                <a className={styles.btn} onClick={changeTextButton} href="#next">{textButton}</a>
                                <button type="submit" style={displayN} className={styles.btn}>¡Listo!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section>
                <Modal show={state.show} >
                    <Modal.Body>
                        {state.submitted ?

                            <div>
                                <Registrado_modal />
                                <div className={styles.boton}><Button variant="secondary" onClick={closeModal}>
                                    Cerrar
                                </Button></div>
                            </div>


                            : null}
                        {hidden3 ?
                            <div>
                                Los correos no coinciden
                            </div>
                            :null}
                        {newHidden ?
                            <div>
                                <Campos_faltante />
                                <div className={styles.boton}><Button variant="secondary" onClick={closeModal2}>
                                    Cerrar
                                </Button></div>
                            </div>
                            : true}

                    </Modal.Body>
                </Modal>
            </section>

        </>
    )
}
