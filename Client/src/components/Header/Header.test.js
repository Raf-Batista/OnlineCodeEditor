import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test-utils';
import Header from './Header';

const wrapper = shallow(<Header />);

test('renders without error', () => {
  const headerComponent = findByTestAttr(wrapper, 'component-header');
  expect(headerComponent.length).toBe(1);
});
test('has a title', () => {
    const title = findByTestAttr(wrapper, 'component-header-title');
    expect(title.length).toBe(1);
});
test("renders 'help' button", () => {
    const title = findByTestAttr(wrapper, 'component-header-help-button');
    expect(title.length).toBe(1);
});