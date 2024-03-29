import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/provider.mock';
import ProductMock from '../../__mocks__/Product.mock';
import Product from '../../components/Product';

describe('<Product>', () => {
  test('Test if render ', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });
  test('Test the buy boton', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
