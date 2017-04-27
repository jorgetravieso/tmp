import { FETCH_WEATHER } from '../actions/index';

/**
 * When the action creator's payload is a promise,
 * redux-promise (a middleware) stops the action entirely,
 * and then once the  request finishes it dispatches
 * a new action of the same type, but with the payload of the resolved request.
 * In other words, it unwraps the promise for us.
 */
export default function (state = [], action) {
    console.log('action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.push(action.payload.data)       //BAD  - we should never mutate the state
            // return state.concat([action.payload.data]);  //GOOD - Create a new instance of the state
            return [action.payload.data, ...state];         //GOOD - A functional alternative
    }
    return state;
}