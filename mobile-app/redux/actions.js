import * as types from './types';

export const subscribe = (id) => {
  return {
    type: types.SUBSCRIBE_EVENT,
    payload: id
  }
}

export const unsubscribe = (id) => {
  return {
    type: types.UNSUBSCRIBE_EVENT,
    payload: id
  }
}
