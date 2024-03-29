import { gql } from "@apollo/client";

const ADD_TRIP = gql`
    mutation addTrip($tripName: String!, $tripInformation: InputTripInformation!, $tripKit: String!, $tripRating: Float!, 
        $tripStatus: Boolean!, $tripReview: [InputTripReview!]){
            addTrip(tripName: $tripName, tripInformation: $tripInformation, tripKit: $tripKit, tripRating: $tripRating, 
                tripStatus: $tripStatus, tripReview: $tripReview)
    }
`;
const DELETE_TRIP = gql`
    mutation deleteTrip($tripName: String!) {
        deleteTrip(tripName: $tripName)
    }
`;
const UPDATE_TRIP_STATUS = gql`
    mutation updateTripStatus($tripName: String!,$tripStatus: Boolean!) {
        updateTripStatus(tripName: $tripName,tripStatus: $tripStatus)
    }
`;
const UPDATE_TRIP = gql`
    mutation updateTrip($tripName: String!,$tripInformation: InputTripInformation!,
        $tripKit: String!,$tripRating: Int!,$tripStatus: Boolean!, $tripReview: [InputTripReview!]){
            updateTrip(tripName: $tripName,tripInformation:$tripInformation,
                tripKit:$tripKit,tripRating:$tripRating,tripStatus:$tripStatus,tripReview:$tripReview)
        }
`;
const DELETE_REVIEW = gql`
    mutation deleteReview($tripName: String, $tripReview: InputTripReview){
        deleteReview(tripName: $tripName, tripReview: $tripReview)
    }
`;
export { ADD_TRIP,DELETE_TRIP,UPDATE_TRIP_STATUS,UPDATE_TRIP,DELETE_REVIEW }