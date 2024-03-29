import { gql } from "@apollo/client";

const GET_REQUESTS = gql`
  query getRequests {
    requests {
      requestUser
      requestName
      requestCell
      requestDate
      requestTrip
      requestStatus
    }
  }
`;

const GET_REQUEST = gql`
  query getRequest($requestUser: String) {
    request(requestUser: $requestUser) {
      requestUser
      requestName
      requestCell
      requestDate
      requestTrip
      requestStatus
    }
  }
`;

export { GET_REQUESTS, GET_REQUEST };
