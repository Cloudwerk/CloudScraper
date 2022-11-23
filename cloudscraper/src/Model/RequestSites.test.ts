import 'jest';
import graphResponseMockData from './mockData';
import { decodeJSON } from './RequestSites';

test('check number of list values after json decoding', () => {
    const prevAmount: number = graphResponseMockData.length;
    const newAmount: number = decodeJSON(graphResponseMockData).length;

    expect(newAmount).toBe(prevAmount);
});