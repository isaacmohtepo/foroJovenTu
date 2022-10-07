import styles from './styles.module.css';
import React, {useState} from "react";
import Button from "react-bootstrap/Button";

export default function Campos_faltante() {

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.modal_content_1}>
                    <div className="close" data-dismiss="modal" aria-label="Close">
                    </div>
                    <div className={styles.content}>
                        <p>No olvides llenar todos los campos</p>
                    </div>
                </div>
            </div>
        </>
    )
}