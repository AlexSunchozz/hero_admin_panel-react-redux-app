// import {
//   filtersFetching,
//   filtersFetched,
//   filtersFetchingError,
// } from "../components/heroesFilters/filtersSlice";

// export const fetchFilters = (request) => (dispatch) => {
//   dispatch(filtersFetching());
//   request("http://localhost:3001/filters")
//     .then((data) => dispatch(filtersFetched(data)))
//     .catch(() => dispatch(filtersFetchingError()));
// };

// export const activeFilterChanged = (filter) => (dispatch) => {
//   setTimeout(() => {
//     dispatch({
//       type: 'ACTIVE_FILTER_CHANGED',
//       payload: filter
//   });
//   }, 1000);
// }
