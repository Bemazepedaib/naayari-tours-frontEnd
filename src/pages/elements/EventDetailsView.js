import React, { useState } from 'react'

import Styles from '../../styles/elementStyles/EventDetailsView.module.css'

import ModalEvent from './ModalEvent';
import { useMutation } from '@apollo/client';
import { UPDATE_STATUS } from '../mutations/eventMutations';

function EventDetailsView({ event }) {

    let key = 0;
    const [updateStatus] = useMutation(UPDATE_STATUS)

    const opciones = [{ value: "null", text: "Seleccione una opcion" }, { value: "active", text: "Activo" }, { value: "closed", text: "Cerrado" }, { value: "inactive", text: "Inactivo" }]
    const eventDate = event.event.eventDate
    const eventTrip = event.event.eventTrip

    const [eventStatus, setEventStatus] = useState(opciones[0].value)
    const [currentStatus, setCurrentStatus] = useState(event.event.eventStatus)

    const changeStatus = async () => {
        try {
            if (eventStatus === "null" || eventStatus === currentStatus) { console.log("Seleccione un valor válido"); return; }
            setCurrentStatus((await updateStatus({
                variables: {
                    eventDate: eventDate,
                    eventTrip: eventTrip,
                    eventStatus: eventStatus
                }
            })).data.updateEventStatus.split("%")[1])
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className={Styles.main}>
            <div className={Styles.titulo1}>{event.event.eventDate + " | " + event.event.eventTrip}</div>
            <div className={Styles.titulo2}>Datos del viaje</div>
            <div className={Styles.contenedorDatos}>
                <div><div className={Styles.subtitle}> Tipo de viaje: </div>{event.event.eventType === "Public" ? "Público" : "VIP"}</div>
                <div><div className={Styles.subtitle}> Estado del viaje: </div>{currentStatus === "active" ? "Activo" : currentStatus === "closed" ? "Cerrado" : "Inactivo"}</div>
                <div className={Styles.grupoCambiarEstado}>
                    <div className={Styles.subtitle}> Cambiar estado: </div>
                    <select
                        value={eventStatus}
                        onChange={e => { setEventStatus(e.target.value) }}
                        onBlur={e => { setEventStatus(e.target.value) }}
                        className={Styles.comboBox}
                    >
                        {opciones.map(option => (
                            <option value={option.value} key={option.value}> {option.text} </option>
                        ))}
                    </select>
                    <button className={Styles.btn} onClick={changeStatus}>
                        Cambiar estado del viaje
                    </button>
                </div>
            </div>
            <div className={Styles.titulo2}>Reservaciones</div>
            <div className={Styles.contenedorUsuarios}>
                {event.event.users.length > 0 ? event.event.users.map(user => (
                    <div key={key++}>
                        <ModalEvent user={user} />
                    </div>
                )) : <div className={Styles.noReservation}>Aún no hay reservaciones</div>}
            </div>
        </div>
    )
}

export default EventDetailsView;