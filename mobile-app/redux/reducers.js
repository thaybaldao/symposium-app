import * as types from "./types";

let initialState = {
  eventsSubscribed: [0,0,0]
};

let events = [];


const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    // adds entries to expression
    case types.SUBSCRIBE_EVENT:
      events = state.eventsSubscribed;
      events[action.payload] = 1;
      console.log('Inscrevendo usuário no evento ' + action.payload)
      return{
        eventsSubscribed: events
      };

    // evalutes expression
    case types.UNSUBSCRIBE_EVENT:
      events = state.eventsSubscribed;
      events[action.payload] = 0;
      console.log('Desinscrevendo usuário no evento ' + action.payload)
      return{
        eventsSubscribed: events
      };

    default:
      return state;
  }
};

export default eventsReducer;
