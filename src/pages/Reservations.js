import React, { useState, useRef } from 'react'
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { ME } from '../backendOperations/querys/userQuerys';
import { GET_TRIP_PRICES } from '../backendOperations/querys/tripQuerys';
import { GET_EVENT } from '../backendOperations/querys/eventQuerys';

import { Slide } from "react-awesome-reveal";

import Styles from '../styles/Reservations.module.css'

import HeaderTittle from '../elements/HeaderTittle';
import SelectComponent from '../elements/Select';
import CompanionComponent from '../elements/Companion';
import ModalReservation from '../elements/ModalReservation';

import { Spinner } from 'react-bootstrap';

function Reservations() {

    const router = useRouter()
    const { query: { selectedDate, selectedTrip } } = router;
    const { loading: userLoading, error: userError, data: userData } = useQuery(ME);
    const { loading: tripLoading, error: tripError, data: tripData } = useQuery(GET_TRIP_PRICES, { variables: { tripName: selectedTrip } });
    const { loading: eventLoading, error: eventError, data: eventData } = useQuery(GET_EVENT, { variables: { eventDate: selectedDate, eventTrip: selectedTrip } })

    const [adultNumber, setAdultNumber] = useState(1);
    const [childNumber, setChildNumber] = useState(0);
    const [babyNumber, setBabyNumber] = useState(0);

    const [observaciones, setObservaciones] = useState("");

    let adult = useRef([]);
    let child = useRef([]);
    let baby = useRef([])

    let precioPasajero = tripData?.trip.tripInformation.price[0].priceAmount
    let precioBebe = tripData?.trip.tripInformation.price[1].priceAmount
    if (tripData?.trip.tripInformation.discount.available) precioPasajero -= tripData?.trip.tripInformation.discount.amount

    if (tripLoading || userLoading || eventLoading) return (
        <div className={Styles.mainContainer}>
            <div className={Styles.header}><HeaderTittle tittle={"RESERVACIÓN"}></HeaderTittle></div>
            <div className={Styles.error}><Spinner /></div>
        </div>
    )
    if (tripError || userError || eventError) return (
        <div className={Styles.mainContainer}>
            <div className={Styles.header}><HeaderTittle tittle={"RESERVACIÓN"}></HeaderTittle></div>
            <div className={Styles.error}>Oops... Algo ha salído mal, intente de nuevo más tarde.</div>
        </div>
    )
    if (eventData.event.eventStatus !== "active") return (
        <div className={Styles.mainContainer}>
            <div className={Styles.header}><HeaderTittle tittle={"RESERVACIÓN"}></HeaderTittle></div>
            <div className={Styles.error}>Disculpa, por el momento este viaje no acepta más reservaciones. Muchas gracias</div>
        </div>
    )
    const funcionType = (tipo, objeto) => {
        if (tipo.current === []) { tipo.current = objeto }
        else { tipo.current.push(objeto) }
    }

    const funcionPush = (nombre, telefono, fecha, tipo) => {
        if (nombre && fecha) {
            const objeto = {
                companionType: tipo,
                companionName: nombre,
                companionCell: telefono,
                companionBirthdate: fecha.toISOString().split("T")[0].split("-").reverse().join("/")
            }
            switch (tipo) {
                case "adult": if (telefono) funcionType(adult, objeto); break;
                case "child": funcionType(child, objeto); break;
                case "baby": funcionType(baby, objeto); break;
            }
        }
    }

    const funcionSlice = (tipo, numero) => {
        switch (tipo) {
            case "adult": adult.current = adult.current.slice(0, numero - 1); break;
            case "child": child.current = child.current.slice(0, numero); break;
            case "baby": baby.current = baby.current.slice(0, numero); break;
        }
    }

    return !tripLoading && !userLoading && !eventLoading && !tripError && !userError && !eventError &&(
        <div>
            <div className={Styles.mainContainer}>
                <div className={Styles.header}><HeaderTittle tittle={"RESERVACIÓN"}></HeaderTittle></div>
                <div className={Styles.contenedorFormulario}>
                    <div className={Styles.titulo}>Participantes</div>
                    <SelectComponent
                        textoLabel={"Adultos $" + precioPasajero} dato={adultNumber}
                        cambiarDato={setAdultNumber} opciones={Array.from({ length: 9 }, (_, i) => i + 1)}
                        funcion={() => { funcionSlice("adult", adultNumber) }}
                    />
                    {adultNumber !== 1 ? [...Array(adultNumber - 1).keys()].map((key) => (
                        <Slide key={key} triggerOnce={true} direction={"down"}>
                            <div className={Styles.titulo2}>Acompañante adulto {key + 1}</div>
                            <CompanionComponent tipo={"adult"} funcion={funcionPush} />
                        </Slide>
                    )) : <div />}
                    <SelectComponent
                        textoLabel={"Niños $" + precioPasajero} dato={childNumber}
                        cambiarDato={setChildNumber} opciones={[...Array(10).keys()]}
                        funcion={() => { funcionSlice("child", childNumber) }}
                    />
                    {childNumber !== 0 ? [...Array(childNumber).keys()].map((key) => (
                        <Slide key={key} triggerOnce={true} direction={"down"}>
                            <div className={Styles.titulo2}>Acompañante niño {key + 1}</div>
                            <CompanionComponent tipo={"child"} funcion={funcionPush} />
                        </Slide>
                    )) : <div />}
                    <SelectComponent
                        textoLabel={"Bebés $" + precioBebe} dato={babyNumber}
                        cambiarDato={setBabyNumber} opciones={[...Array(10).keys()]}
                        funcion={() => { funcionSlice("baby", babyNumber) }}
                    />
                    {babyNumber !== 0 ? [...Array(babyNumber).keys()].map((key) => (
                        <Slide key={key} triggerOnce={true} direction={"down"}>
                            <div className={Styles.titulo2}>Acompañante bebé {key + 1}</div>
                            <CompanionComponent tipo={"baby"} funcion={funcionPush} />
                        </Slide>
                    )) : <div />}
                    <div className={Styles.titulo}>Observaciones</div>
                    <textarea
                        className={Styles.textArea}
                        rows={5}
                        placeholder='Si quieres comentarnos alguna situación especial, ponlo aquí...'
                        value={observaciones}
                        onChange={e => setObservaciones(e.target.value)}
                        onBlur={e => setObservaciones(e.target.value)}>
                    </textarea>
                </div>
                <div className={Styles.centerButton}>
                    <ModalReservation
                        datosCompanion={new Array(adult, child, baby)}
                        datosUsuario={new Array(userData, selectedDate, selectedTrip, observaciones)}
                        datosPrecio={new Array(
                            { type: "Adulto", number: adultNumber, price: precioPasajero },
                            { type: "Niño", number: childNumber, price: precioPasajero },
                            { type: "Bebé", number: babyNumber, price: precioBebe }
                        )}
                    />
                </div>
            </div>
        </div>
    )
}

export default Reservations