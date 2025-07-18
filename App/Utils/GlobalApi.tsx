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

// const createBooking = async (data:any) => {
//   const mutationQuery = gql`
//     mutation CreateBooking {
//       createBooking(
//         data: {
//           bookingStatus: completed
//           businessList: { connect: { id: "`+data.businessId+`" } }
//           time: "`+data.date+`"
//           userEmail: "`+data.userEmail+`"
//           userName: "`+data.userName+`"
//         }
//       ) {
//         id
//         # createdBy {
//         #   name
//         #   id
//         # }
//       }
//       publishManyBookings(to: PUBLISHED) {
//         count
//       }
//     }
//   `;
//   const result = await request(MASTER_URI, mutationQuery);
//   return result;
// };

// const createNewBooking = async (
//   businessId: string,
//   date: string, // format: "2025-07-22"
//   time: string, // format: "2:30 PM"
//   userEmail: string,
//   userName: string
// ) => {
//   // Convert to ISO DateTime string
//   const [hourString, minutePart] = time.split(':');
//   const [minute, meridiem] = minutePart.split(' ');
//   let hour = parseInt(hourString, 10);
//   if (meridiem === 'PM' && hour !== 12) hour += 12;
//   if (meridiem === 'AM' && hour === 12) hour = 0;

//   const isoTime = `${date}T${hour.toString().padStart(2, '0')}:${minute}:00Z`;

//   const mutation = gql`
//     mutation CreateBooking(
//       $businessId: ID!
//       # $date: Date!
//       $time: DateTime!
//       $userEmail: String!
//       $userName: String!
//     ) {
//       createBooking(
//         data: {
//           bookingStatus: booked
//           businessList: { connect: { id: $businessId } }
//           # date: $date
//           time: $time
//           userEmail: $userEmail
//           userName: $userName
//         }
//       ) {
//         id
//       }
//       publishManyBookings(to: PUBLISHED) {
//         count
//       }
//     }
//   `;
//   const variables = {
//     businessId,
//     // date,
//     time: isoTime,
//     userEmail,
//     userName,
//   };

//   const result = await request(MASTER_URI, mutation, variables);
//   return result;
// };

const createNewBooking = async (
  businessId: string,
  dateTime: string,
  userEmail: string,
  userName: string
) => {
  const mutationQuery = gql`
    mutation CreateBooking {
      createBooking(
        data: {
          bookingStatus: completed
          businessList: { connect: { id: "${businessId}" } }
          time: "${dateTime}"
          userEmail: "${userEmail}"
          userName: "${userName}"
        }
      ) {
        id
      }
      publishManyBookings(to: PUBLISHED) {
        count
      }
    }
  `;
  const result = await request(MASTER_URI, mutationQuery);
  return result;
};

const getUserBooking = async (userEmail: any) => {
  const query =
    gql`
    query GetUserBookings {
      bookings(where: { userEmail: "` +
    userEmail +
    `" }, orderBy: publishedAt_DESC) {
        businessList {
          name
          images {
            url
          }
          contactPerson
          address
          email
          about
          id
        }
        date
        time
        userEmail
        userName
        id
        bookingStatus
      }
    }
  `;
  const result = await request(MASTER_URI, query);
  return result;
};

export default {
  getSlider,
  getCategory,
  getBusinessList,
  getBusinessByCategory,
  createNewBooking,
  getUserBooking,
};
