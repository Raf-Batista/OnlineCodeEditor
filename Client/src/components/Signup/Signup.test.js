import * as redux from 'react-redux';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test-utils';
import Signup from './Signup';

jest.mock("react-redux", () => ({
    useSelector: jest.fn((fn) => fn()),
    useDispatch: () => jest.fn()
  }));
  
  const spy = jest.spyOn(redux, 'useSelector')
  spy.mockReturnValue({ user: {} });
  
  const setup = (props = {loggedIn: false}, state = null) => {
    return shallow(<Signup {...props} />);
  };

  const wrapper = setup();
  
  test("renders the signup component when not logged in", () => {
    const signupComponent = findByTestAttr(wrapper, 'component-signup');
    expect(signupComponent.length).toBe(1);
  });
  

