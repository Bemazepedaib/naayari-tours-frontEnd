import { gql } from "@apollo/client";

const ADD_USER = gql`
    mutation addUser(   $name: String!, $cellphone: String!, $birthDate: String!, $email: String!, $password: String!, $sex: String!, 
                        $reference: String!, $userType: String!, $userLevel: String!, $membership: Boolean!, $verified: Boolean!){
        addUser(    name: $name, cellphone: $cellphone, birthDate: $birthDate, email: $email, password: $password, sex: $sex,
                    reference: $reference, userType: $userType, userLevel: $userLevel, membership: $membership, verified: $verified){
            name
            cellphone
            birthDate
            email
            password
            sex
            reference
            userType
            userLevel
            membership
            verified
        }
    }
`

const DELETE_USER = gql`
    mutation deleteUser($email: String!) {
        deleteUser(email: $email){
            name
            cellphone
            birthDate
            email
            password
            sex
            reference
            userType
            userLevel
            membership
            coupons {
                couponType
                couponDescription
                couponAmount
                couponDate
                couponApplied
            }
            preferences {
                preferenceType
            }
        }
    }
`;

export { ADD_USER, DELETE_USER }