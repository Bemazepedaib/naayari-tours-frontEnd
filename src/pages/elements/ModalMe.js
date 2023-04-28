import { React, useState,useRef } from 'react'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Styles from '../../styles/elementStyles/ModalMe.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import Image from 'next/image'

import { UPDATE_USER_NAME, UPDATE_USER_CELL } from '../mutations/userMutations';
import { useMutation } from '@apollo/client';

function ModalMe({ title, message }) {

    const [show, setShow] = useState(false);
    const [info, setInfo] = useState('');
    const myError = useRef(false);
    const [password, setPassWord] = useState('');
    const [userName] = useMutation(UPDATE_USER_NAME);
    const [userCell] = useMutation(UPDATE_USER_CELL);
    const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'

    const handleShow = () => {
        setShow(true);
    }
    
    //ONCHANGE FOR INPUT METHODS
    const onChange = (e) => {
        if (e.target.name === "value") {
            setInfo(e.target.value)
        } else {
            setPassWord(e.target.value)
        }
    }
    //UPDATE THE NAME AND PHONE
    const changeData = async () => {
        myError.current = false;
        switch (title) {
            case "Cambia tu nombre":
                try {
                    await userName({ variables: { newName: info, password: password } })
                } catch (error) {
                    myError.current = true;
                } finally{
                    if(myError === false){
                        console.log("caca")
                        handleClose()
                    }
                }
                break;
            case "Cambia tu Teléfono":
                try {
                    await userCell({ variables: { newCell: info, password: password } })
                } catch (error) {
                    myError.current = true;
                }
                break;
        }
    }
    const handleClose = async () => {setShow(false); setInfo(''); setPassWord(''); }

    return (
        <>
            <i className={Styles.icon} onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} ></FontAwesomeIcon></i>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={Styles.modalTitle}>
                        <Image className={Styles.image} src={image} width={100} height={100} alt="Naayari tours" />
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={Styles.modalBody}>
                    <input onChange={onChange} className={Styles.input} type={'text'} name='value'
                        placeholder={message} value={info} required>
                    </input>
                    <input onChange={onChange} value={password} className={Styles.input} type={'password'} placeholder={'Introduce tu contraseña'} required>
                    </input>
                </Modal.Body>
                <Modal.Footer className={Styles.modalFooter}>
                    <div className={Styles.errorMessage}>{myError ?"Contraseña Incorrecta" : ""}</div>
                    <Button className={Styles.btnSave} variant="btn btn-dark" onClick={changeData}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMe;