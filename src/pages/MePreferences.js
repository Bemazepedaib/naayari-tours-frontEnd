import React from 'react'
import { ME } from '../backendOperations/querys/userQuerys';
import { useQuery } from '@apollo/client'
import Preferences from './Preferences';

const MePreferences = () => {
    const { loading, error, data } = useQuery(ME)
    return (
        <>
            {!loading && !error && (
                <Preferences preferences={(data.me.preferences.map(preference => preference.preferenceType))}>
                </Preferences>
            )}
        </>
    )
}

export default MePreferences