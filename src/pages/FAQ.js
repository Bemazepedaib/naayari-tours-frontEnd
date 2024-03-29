import { Accordion } from 'react-bootstrap';
import Styles from '../styles/FAQ.module.css';
import Navbar from './Navbar';
import Footer from './Footer';
import AccordionItem from '../elements/AccordionItem';

function Preguntas(link) {

    const linkCatalogo = link;
    const linkMapa = "https://www.google.com/maps/@21.4811868,-104.867171,3a,75y,119.94h,86.92t/data=!3m7!1e1!3m5!1s8QHh_X8lk1xe6fX13yxktA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D8QHh_X8lk1xe6fX13yxktA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D156.55252%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192"

    const preguntas = [
        {
            eventKey: "0", header: "¿En donde están ubicadas sus oficinas?",
            body:
                (<div>
                    Nos ubicamos en <a className={Styles.text} href={linkMapa}> Av. Cheguevara #84, Col. 2 de Agosto, Tepic, Nayarit, México </a>
                </div>)
        },
        {
            eventKey: "1", header: "¿En que horario puedo ir a sus oficinas?",
            body: "Nuestras oficinas abren de Martes a Viernes en horario corrido de 10 am a 5 pm"
        },
        {
            eventKey: "2", header: "¿Cómo puedo pagar mi reservación?",
            body:
                (<div>
                    <b>Opción 1:</b> Depositar al número de cuenta: 4169 1608 6438 5654 y manda tu recibo al whatsapp +52 311 910 4138 para confirmar tu pago.
                    <p />
                    <b>Opción 2:</b> Ir personalmente a las oficinas para pagar.
                </div>)
        },
        {
            eventKey: "3", header: "Ya hice mi reservación. ¿En donde empieza mi viaje?",
            body: "Todos los viajes inician desde nuestras oficinas, la hora dependerá del viaja que hayas reservado"
        },
        {
            eventKey: "4", header: "¿Cuál es el precio de un pasajero niño?",
            body: "Los pasajeros mayores de 6 años pagan su pasaje completo."
        },
        {
            eventKey: "5", header: "¿Puedo llevar un bebé a un viaje?",
            body:
                (<div>
                    Los bebés pueden ir a los viajes siempre y cuando se pague un seguro de viajero al hacer la reservación
                    y un adulto se haga cargo del bebé durante todo el trayecto.
                </div>)
        },
        {
            eventKey: "6", header: "¿Cómo puedo dejar una reseña?",
            body:
                (<div>
                    <b>Paso 1:</b> Debes haber finalizado exitósamente un viaje.
                    <p />
                    <b>Paso 2:</b> Debes descargar la aplicación de Naayari tours para android. &#40; Descarga aquí. &#41;
                    <p />
                    <b>Paso 3:</b> Ingresa a tu cuenta desde la aplicación.
                    <p />
                    <b>Paso 4:</b> Ve al apartado de viajes realizados.
                    <p />
                    <b>Paso 5:</b> En este apartado selecciona el viaje al que quieras dejar una reseña.
                    <p />
                    <b>Paso 6:</b> Escribe tu reseña y dale a &#34;Enviar&#34;.
                </div>)
        },
        {
            eventKey: "7", header: "¿Cómo puedo hacer una reservación?",
            body:
                (<div>
                    <b>Paso 1:</b> Inicia sesión en tu cuenta o crea una desde el apartado de &#34;Iniciar Sesión&#34;.
                    <p />
                    <b>Paso 2:</b> Ve al inicio y selecciona el viaje que más te interese.
                    <p />
                    <b>Paso 3:</b> Aquí, selecciona la fecha desde el menú desplegable.
                    <p />
                    <b>Paso 4:</b> Selecciona cuantos lugares necesitas y llena los datos de cada pasajero. &#40; Menos el tuyo. &#41;
                    <p />
                    <b>Paso 5:</b> Comentanos si necesitas alguna consideración extra en tu viaje.
                    <p />
                    <b>Paso 6:</b> Al hacer tu reservación te dará un resumen de lo que estás por reservar y el precio total. Si estas de acuerdo, confirma.
                    <p />
                    <b>Paso 7:</b> Una vez hecha la reservación, debes de hacer el pago que te solicite de la mejor manera.
                    <p />
                    <b>Paso 8:</b> Si hiciste el pago por depósito, manda tu voucher al whatsapp +52 311 910 4138 para confirmar tu pago.
                </div>)
        },
        {
            eventKey: "8", header: "Me equivoqué al crear mi cuenta. ¿Puedo cambiar mis datos?",
            body:
                (<div>
                    <b>Opción 1:</b> Para cambiar los datos de tu cuenta, debes iniciar sesión y en el apartado de &#34;Mi perfil&#34; puedes hacer el cambio.
                    <p />
                    <b>Opción 2:</b> Puedes solicitar a un administrador que cambie tus datos mandando whatsapp al +52 311 910 4138
                </div>)
        },
        {
            eventKey: "9", header: "He olvidado la contraseña de mi cuenta. ¿Qué puedo hacer?",
            body:
                (<div>
                    <b>Opción 1:</b> Desde el apartado de inicio de sesión puedes empezar el proceso de cambio de contraseña.
                    <p />
                    <b>Opción 2:</b> Puedes solicitar a un administrador que cambie tu contraseña mandando whatsapp al +52 311 910 4138
                </div>)
        },
        {
            eventKey: "10", header: "¿Qué son los viajes VIP?",
            body: "Los viajes VIP son viajes que se hacen mediante una solicitud, y que te permiten hacer cambios en el itinerario y que el viaje sea en la fecha que tu desees"
        },
        {
            eventKey: "11", header: "¿Cómo puedo solicitar un viaje VIP?",
            body:
                (<div>
                    <b>Paso 1:</b> Inicia sesión en tu cuenta o crea una desde el apartado de &#34;Iniciar Sesión&#34;.
                    <p />
                    <b>Paso 2:</b> Ve al inicio y selecciona el viaje que más te interese.
                    <p />
                    <b>Paso 3:</b> Selecciona la fecha que desees reservar.
                    <p />
                    <b>Paso 4:</b> Después, haz clic en el botón de &#34;¡Crea tu grupo VIP!&#34;.
                    <p />
                    <b>Paso 5:</b> Espera a que un administrador se comunique contigo vía whatsapp para continuar con el proceso.
                    <p />
                    <b>Paso 6:</b> Continúa el proceso mediante whatsapp con el administrador.
                </div>)
        },
        // {
        //     eventKey: "12", header: "¿Qué viajes ofrecen?",
        //     body: (<div>Da clic para ver nuestro catálogo → <a href={linkCatalogo}>Catalogo</a> </div>)
        // },
    ]

    return (
        <div>
            <Navbar />
            <div className={Styles.contenedor}>
                <div className={Styles.title}>Preguntas frecuentes</div>
                <Accordion bsPrefix={Styles.accordion} alwaysOpen>
                    {preguntas.map(pregunta => (<AccordionItem eventKey={pregunta.eventKey} header={pregunta.header} body={pregunta.body} key={pregunta.eventKey} />))}
                </Accordion>
            </div>
            <Footer />
        </div>
    )
}

export default Preguntas;