const jest = require('@jest/globals');
import { IColumn } from '@fluentui/react';
import { AppServices } from './AppServices';
import graphResponseMockData from './mockData';
import { decodeJSON } from './getSites';

jest.test('compare array length before and after json decoding', () => {
    const prevAmount: number = graphResponseMockData.length;
    const newAmount: number = decodeJSON(graphResponseMockData).length;

    jest.expect(newAmount).toBe(prevAmount);
});

jest.test('check amount of sites after loading more results and sorting', () => {
    const appServices = new AppServices();
    const testColumn: IColumn = { key: 'lastModifiedDateTime', name: 'Date Modified', fieldName: 'DateModified', minWidth: 150, maxWidth: 200, isResizable: true, showSortIconWhenUnsorted: true, isSorted: appServices.getSorted('lastModifiedDateTime'), isSortedDescending: appServices.getSortedDesc('lastModifiedDateTime')}
    const initialCounterValue: number = appServices.loadCounter
    const loadCounterIncrease: number = 3;

    appServices.loadCounter += loadCounterIncrease
    appServices.onSortChanged(testColumn);

    jest.expect(appServices.loadCounter).toEqual(initialCounterValue + loadCounterIncrease);
});