import { request, gql } from 'graphql-request'

const MASTER_URL = "https://api-ap-south-1.hygraph.com/v2/clr695v26025b01w5zukvzd51/master"

const GetSlider = async () =>{
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
const GetCategories = async () =>{
  const query = gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }`
  const result = await request(MASTER_URL, query);
  return result;
}
const GetBusiness = async () =>{
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


  
export default{
    GetSlider,
    GetCategories,
    GetBusiness
}