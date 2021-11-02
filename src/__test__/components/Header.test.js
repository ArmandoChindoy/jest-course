import React from 'react';
import { create } from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/provider.mock';
import Header from '../../components/Header';

describe('<Header>', () => {
  test('Test header component render', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });
  test('Title render', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});
describe('<Heade> Snapshot', () => {
  test('Test the header snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot;
  });
});
