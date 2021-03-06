export default (store, action) => {
  switch (action.type) {
    case "REGISTERED_ZOOM_ATTENDEE":
      var student = store.enrolled[action.idx]
      student.zoomVerified = true;
      student.present = true;
      student.user_id = action.payload.user_id;
      student.date_time = action.payload.join_time
      return { ...store };
    case "UNREGISTERED_ZOOM_ATTENDEE":
      store.unregistered.push(action.payload)
      return { ...store };
    case "MANUAL_PRESENT_TOGGLE":
      var idx = store.enrolled.findIndex((student, idx) => student.user_name === action.payload.user_name);
      var student = store.enrolled[idx];
      if (!student.present) {
        student.present = true;
      } else {
        student.present = !student.present
      }
      student.date_time = new Date().toISOString();
      return { ...store };
    case "POPULATE_ENROLLMENT":
      store.enrolled = action.payload
      return {...store}
    case "CHANGE_VIEW":
      store.view = action.payload
      return {...store}
    case "UPDATE_CAMPUS":
      store.campus = action.payload;
      return {...store}
    case "UPDATE_COHORT_ONE":
      store.cohortOne = action.payload;
      return {...store}
    case "UPDATE_COHORT_TWO":
      store.cohortTwo = action.payload;
      return {...store}
    case "AUTHORIZE":
      store.loggedIn = action.payload;
      return {...store}
    default:
      return store;
  }
}