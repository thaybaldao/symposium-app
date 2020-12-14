import { createStore} from 'redux';
import eventsReducer from './reducers'

// sets up store with calculator reducers
function configureStore(){
    return createStore(eventsReducer);
}

export default configureStore;
