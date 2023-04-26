import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import Navbar from './Navbar';
import Styles from '../../styles/Me.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'next/image'

import Router from 'next/router';

function Me() {
    const [show, setShow] = useState(false);
    const initialValue = {
        title: '',
        value: '',
        type: '',
    }
    const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'
    const [info, setInfo] = useState(initialValue);
    const handleClose = () => setShow(false);
    const goPreferences = () => {
        Router.push({ pathname: '../elements/MePreferences'})
    }
    const handleShow = (pressedButton) => {
        setInfo(initialValue)
        switch (pressedButton) {
            case "name":
                const value1 = {
                    title: 'Cambia tu nombre',
                    value: data.me.name,
                    type: 'text',
                    message: 'Introduce tu nuevo nombre'
                }
                setInfo(value1)
                break;
            case "cellphone":
                const value2 = {
                    title: 'Cambia tu télefono',
                    value: data.me.cellphone,
                    type: 'text',
                    message: 'Introduce tu nuevo télefono'
                }
                setInfo(value2)
                break;
            case "birthDate":
                const value3 = {
                    title: 'Cambia tu fecha de nacimiento',
                    value: data.me.birthDate,
                    type: 'date',
                    message: ''
                }
                setInfo(value3)
                break;
        }
        setShow(true);
    }
    const { loading, error, data } = useQuery(ME);

    if (error) { Router.push({ pathname: '/sites/Login' }) }
    if (loading) return (<div><Navbar />Loading...</div>)

    return <>{!loading && !error &&
        (
            <div>
                <Navbar></Navbar>
                <div className={Styles.mainContainer}>
                    <div className={Styles.titlesContainer}>
                        <h1 className={Styles.titleCount}>CUENTA</h1><hr />
                        <h2 className={Styles.titleChanges}>EDITA LOS DATOS PERSONALES DE TU CUENTA Y
                            CAMBIA LA CONTRASEÑA AQUÍ</h2>
                    </div>
                    <div className={Styles.dataMainContainer}>
                        <h2 className={Styles.titleData}>DATOS PERSONALES</h2><hr />
                        <h3 className={Styles.subtitleData}>CAMBIAR NOMBRE</h3>
                        <div className={Styles.dataContainer}>
                            <p className={Styles.data}>
                                {data.me.name}
                            </p>
                            <button onClick={() => handleShow('name')} className={Styles.btnEdit}> <FontAwesomeIcon icon={faPenToSquare} /></button>
                        </div>
                        <h3 className={Styles.subtitleData}>CAMBIAR TÉLEFONO</h3>
                        <div className={Styles.dataContainer}>
                            <p className={Styles.data}>
                                {data.me.cellphone}
                            </p>
                            <button onClick={() => handleShow('cellphone')} className={Styles.btnEdit}> <FontAwesomeIcon icon={faPenToSquare} /></button>
                        </div>
                        <h3 className={Styles.subtitleData}>FECHA DE NACIMIENTO</h3>
                        <div className={Styles.dataContainer}>
                            <p className={Styles.data}>
                                {data.me.birthDate}
                            </p>
                            <button onClick={() => handleShow('birthDate')} className={Styles.btnEdit}> <FontAwesomeIcon icon={faPenToSquare} /></button>
                        </div>
                        <div className={Styles.btnContainer}>
                            <button className={Styles.btnChange} onClick={() => goPreferences()}>CAMBIAR LAS PREFERENCIAS</button>
                        </div>
                    </div>
                    <div className={Styles.passContainer}>
                        <form className={Styles.inputContainer}>
                            <label className={Styles.titlePass} name='password'>CONTRASEÑA</label>
                            <hr className={Styles.hr} />
                            <input className={Styles.input} type="password" placeholder='Introducir contraseña actual'></input>
                            <input className={Styles.input}  type="password" placeholder='Introducir nueva contraseña'></input>
                            <input className={Styles.input}  type="password" placeholder='Introducir nueva contraseña de nuevo'></input>
                            <div className={Styles.btnContainer}>
                                <button className={Styles.btnChange}>CAMBIAR LA CONTRASEÑA</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className={Styles.modalTitle}>
                            <Image className={Styles.image} src={image} width={100} height={100} alt="Naayari tours" />
                            {info.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={Styles.modalBody}>
                        <input className={Styles.input} type={info.type} placeholder={info.message}
                            defaultValue={info.value} required></input>
                        <input className={Styles.input} type="password"
                            placeholder='Introduce tu contraseña' required></input>
                    </Modal.Body>
                    <Modal.Footer className={Styles.modalFooter}>
                        <Button className={Styles.btnSave} variant="btn btn-dark" onClick={handleClose}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }</>;
}

export default Me