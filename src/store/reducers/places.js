import {
  ADD_PLACE,
  DELETE_PLACE,
  DESELECT_PLACE,
  SELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: {
            uri:
              "https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/shutterstock_421013719.jpg"
          }
        })
      };
    default:
      return state;
  }
};

export default reducer;
