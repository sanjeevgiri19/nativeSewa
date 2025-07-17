import { request, gql } from 'graphql-request';

const MASTER_URI = process.env.EXPO_PUBLIC_HYGRAPH_MASTER_CONTENT_API;

const getSlider = async () => {
  const query = gql`
    query Sliders {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URI, query);
  return result;
};

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        name
        id
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URI, query);
  return result;
};

const getBusinessList = async () => {
  const query = gql`
    query BusinessLists {
      businessLists {
        about
        address
        category {
          name
        }
        images {
          url
        }
        name
        id
        email
        contactPerson
      }
    }
  `;
  const result = await request(MASTER_URI, query);
  return result;
};

const getBusinessByCategory = async (category: any) => {
  const query =
    gql`
    query BusinessListsByCategory {
      businessLists(where: { category: { name: "` +
    category +
    `" } }) {
        about
        address
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URI, query);
  return result;
};

export default { getSlider, getCategory, getBusinessList, getBusinessByCategory };
