import React from "react";
import Quote from "./Quote";

import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../../test/testUtils";

const wrapper = shallow(<Quote />).dive();

describe("render", () => {
  test("should render component without error", () => {
    const component = findByTestAttr(wrapper, "input");
    expect(component.length).not.toBe(0);
  });
});
