import userReducer from '../reducers/userReducer';
import * as types from '../action-types';

describe('bundles reducer', () => {
    it('should return the initial state', () => {
        const initialUserState = {
            username: "",
            codes: [{ title: "", order: [""], data: [""] }],
            isLoggingIn: false,
          };

        expect(userReducer(undefined, {})).toEqual(initialUserState);
    });
});