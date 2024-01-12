import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clr695v26025b01w5zukvzd51/master"

const GetSlider = async () => {
  const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }

      
`


  const result = await request(MASTER_URL, query);
  return result;

}
const GetCategories = async () => {
  const query = gql`
  query GetCategory {
    categories {
      name
      id
      icon {
        url
      }
    }
  }`
  const result = await request(MASTER_URL, query);
  return result;
}
const GetBusiness = async () => {
  const query = gql`
  query GetBusiness {
    businessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      images {
        url
      }
      about
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}
const getBusinessListByCategory = async (category) => {
  const query = gql`
    query GetBusinessList {
      businessLists(where: {category: {name: "`+ category + `"}}) {
        id
        name
        email
        contactPerson
        category {
          name
        }
        address
        images {
          url
        }
        about
      }
    }
  `
  const result = await request(MASTER_URL, query);
  return result;


}


const createBooking = async (data) => {
  const mutationQuery = gql`
  mutation createBooking {
      createBooking(
        data: {
          bookingStatus: Booked,
           businessList: {
            connect: {id: "`+ data.businessId + `"}},
            date: "`+ data.date + `",
             time: "`+ data.time + `", 
             userEmail: "`+ data.userEmail + `",
              userName: "`+ data.userName + `"}
              ) {
                id
              }
              publishManyBookings(to: PUBLISHED) {
                count
              }
            }
    `
  const result = await request(MASTER_URL, mutationQuery);
  return result;
}

const getUserBookings = async (userEmail) => {
  const query = gql`
  query GetUserBooking {
    bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+ userEmail + `"}) {
      time
      userEmail
      userName
      date
      bookingStatus
      id
      businessList {
        id
        address
        email
        name
        contactPerson
        about
        images {
          url
        }
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}

export default {
  GetSlider,
  GetCategories,
  GetBusiness,
  getBusinessListByCategory,
  createBooking,
  getUserBookings
}