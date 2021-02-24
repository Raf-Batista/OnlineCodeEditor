import { configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import "@testing-library/jest-dom/extend-expect";
import { enableFetchMocks } from "jest-fetch-mock";

configure({ adapter: new Adapter() });
enableFetchMocks();