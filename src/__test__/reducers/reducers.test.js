import reducer from '../../reducers';
import ProductMock from '../../__mocks__/Product.mock';

describe('Reducers', () => {
  test('Return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('addToCart', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };
    expect(reducer(initialState, action)).toEqual(expected);
  });
});
