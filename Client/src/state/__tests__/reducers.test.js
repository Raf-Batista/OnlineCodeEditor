import userReducer from '../reducers/userReducer';
import * as types from '../action-types';

describe('user reducer', () => {
    it('should return the initial state', () => {
        const initialUserState = {
            username: "",
            codes: [{ title: "", order: [""], data: [""] }],
            isLoggingIn: false,
          };

        expect(userReducer(undefined, {})).toEqual(initialUserState);
    });

    it('should add a user when checking if a user is logged in', () => {
        const expectedResult = {
            username: "test",
            codes: [{ title: "one", order: ["a"], data: ["let a = 1;"] }, { title: "two", order: ["b"], data: ["let b = 2;"] }]
          };

        const payload = {
            username: "test",
            codes: [{ title: "one", order: ["a"], data: ["let a = 1;"] }, { title: "two", order: ["b"], data: ["let b = 2;"] }]
        }

        expect(userReducer({}, {type: types.ActionType.CHECK_IF_LOGGED_IN, payload: payload})).toEqual(expectedResult);
    });

    it('should set logging in to true ', () => {
        const expectedResult = {isLoggingIn: true};

        expect(userReducer({isLoggingIn: false}, {type: types.ActionType.LOGIN_USER_START})).toEqual(expectedResult);
    });

    it('should successfully add a use when logging in', () => {
        const expectedResult = {
            username: "test",
            codes: [{ title: "one", order: ["a"], data: ["let a = 1;"] }, { title: "two", order: ["b"], data: ["let b = 2;"] }], 
            isLoggingIn: false
          };
        
        const payload = {
            username: "test",
            codes: [{ title: "one", order: ["a"], data: ["let a = 1;"] }, { title: "two", order: ["b"], data: ["let b = 2;"] }]
        };

        expect(userReducer({}, {type: types.ActionType.LOGIN_USER_COMPLETE, payload: payload})).toEqual(expectedResult);
    });
});