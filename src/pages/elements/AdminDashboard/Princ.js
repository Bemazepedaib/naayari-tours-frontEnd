import React from 'react'
import Styles from '../../../styles/elementStyles/Princ.module.css';
import Chart from './Chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendar, faVideoCamera, faThumbsUp, faUsd } from '@fortawesome/free-solid-svg-icons'

function Princ() {

    const lonk = "https://drive.google.com/uc?export=view&id=";
    const avatar = "1c0JUYO3Kta4vIAd3oTJfNwd4bXBKkzFJ";

    return (
        <main className={Styles.mainAdmin}>
            <div className={Styles.mainContainerAdmin}>
                <div className={Styles.mainTitleAdmin}>
                    <div className={Styles.mainGreeting}>
                        <h1>Hello Naayari</h1>
                        <p>Welcome to you admin dashboard</p>
                    </div>
                </div>

                <div className={Styles.mainCardsAdmin}>
                    <div className={Styles.cardAdmin}>
                        <i className={Styles.textLightblue}><FontAwesomeIcon icon={faUser} /></i>
                        <div className={Styles.cardInner}>
                            <p className={Styles.textPrimaryP}>Number of suscribers</p>
                            <span className={`${Styles.fontBold} ${Styles.textTitle}`}>578</span>
                        </div>
                    </div>

                    <div className={Styles.cardAdmin}>
                        <i className={Styles.textRed}><FontAwesomeIcon icon={faCalendar} /></i>
                        <div className={Styles.cardInner}>
                            <p className={Styles.textPrimaryP}> Times of Watching</p>
                            <span className={`${Styles.fontBold} ${Styles.textTitle}`}> 2467</span>
                        </div>
                    </div>

                    <div className={Styles.cardAdmin}>
                        <i className={Styles.textYellow}><FontAwesomeIcon icon={faVideoCamera} /></i>
                        <div className={Styles.cardInner}>
                            <p className={Styles.textPrimaryP}>Number of Videos</p>
                            <span className={Styles.fontBoldTextTitle}>340</span>
                        </div>
                    </div>

                    <div className={Styles.cardAdmin}>
                        <i className={Styles.textGreen}><FontAwesomeIcon icon={faThumbsUp} /></i>
                        <div className={Styles.cardInner}>
                            <p className={Styles.textPrimaryP}>Number of Likes</p>
                            <span className={`${Styles.fontBold} ${Styles.textTitle}`}>645</span>
                        </div>
                    </div>
                </div>

                <div className={Styles.charts}>
                    <div className={Styles.chartsLeft}>
                        <div className={Styles.chartsLeftTitle}>
                            <div>
                                <h1>Daily Reports</h1>
                                <p >Cupertino, California, USA</p>
                            </div>
                            <i><FontAwesomeIcon icon={faUsd} /></i>
                        </div>
                        <div className={Styles.chartPrins}>
                            <Chart />
                        </div>
                    </div>

                    <div className={Styles.chartsRight}>
                        <div className={Styles.chartsRightTitle}>
                            <div>
                                <h1>Stats Reports</h1>
                                <p className={Styles.Stats}>Cupertino, California, USA</p>
                            </div>
                            <i><FontAwesomeIcon icon={faUsd} /></i>
                        </div>
                        <div className={Styles.chartsRightCards}>
                            <div className={Styles.PrinsCard1}>
                                <h1>Income</h1>
                                <p className={Styles.PrinsIncome}>$75,300</p>
                            </div>
                            <div className={Styles.PrinsCard2}>
                                <h1>Sales</h1>
                                <p className={Styles.PrinsSales}>$124,200</p>
                            </div>
                            <div className={Styles.PrinsCard3}>
                                <h1>Users</h1>
                                <p className={Styles.PrinsUsers}>3900</p>
                            </div>
                            <div className={Styles.PrinsCard4}>
                                <h1>Orders</h1>
                                <p className={Styles.PrinsOrders}>1881</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Princ;