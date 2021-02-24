export const testAttr = (val) => {
    return process.env.NODE_ENV === 'production' ? {} : { 'data-test': val };
  };

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
  };
