const jest = require('@jest/globals');
import { IColumn } from '@fluentui/react'
import { AppServices } from '../Model/AppServices';

jest.test('check if sorting arguments are set correctly to ascending on first click', () => {
    const appServices = new AppServices();
    const testColumn: IColumn = { key: 'lastModifiedDateTime', name: 'Date Modified', fieldName: 'DateModified', minWidth: 150, maxWidth: 200, isResizable: true, showSortIconWhenUnsorted: true, isSorted: appServices.getSorted('lastModifiedDateTime'), isSortedDescending: appServices.getSortedDesc('lastModifiedDateTime')}

    appServices.onSortChanged(testColumn);
    jest.expect(appServices.columnName).toBe(testColumn.key);
    jest.expect(appServices.getSorted(testColumn.key)).toBe(true);
    jest.expect(appServices.getSortedDesc(testColumn.key)).toBe(false);
    jest.expect(appServices.sortArgs).toBe("&$orderBy=" + testColumn.key);
});

jest.test('check if sorting arguments are set correctly to descending on second click', () => {
    const appServices = new AppServices();
    const testColumn: IColumn = { key: 'lastModifiedDateTime', name: 'Date Modified', fieldName: 'DateModified', minWidth: 150, maxWidth: 200, isResizable: true, showSortIconWhenUnsorted: true, isSorted: appServices.getSorted('lastModifiedDateTime'), isSortedDescending: appServices.getSortedDesc('lastModifiedDateTime')}
    appServices.columnName = testColumn.key;
    appServices.isSorted = true;
    appServices.isSortedDesc = false;

    appServices.onSortChanged(testColumn);
    jest.expect(appServices.columnName).toBe(testColumn.key);
    jest.expect(appServices.getSorted(testColumn.key)).toBe(true);
    jest.expect(appServices.getSortedDesc(testColumn.key)).toBe(true);
    jest.expect(appServices.sortArgs).toBe("&$orderBy=" + testColumn.key + " desc");
});

jest.test('check if sorting arguments are set correctly to default (reset) on third click', () => {
    const appServices = new AppServices();
    const testColumn: IColumn = { key: 'lastModifiedDateTime', name: 'Date Modified', fieldName: 'DateModified', minWidth: 150, maxWidth: 200, isResizable: true, showSortIconWhenUnsorted: true, isSorted: appServices.getSorted('lastModifiedDateTime'), isSortedDescending: appServices.getSortedDesc('lastModifiedDateTime')}
    appServices.columnName = testColumn.key;
    appServices.isSorted = true;
    appServices.isSortedDesc = true;

    appServices.onSortChanged(testColumn);
    jest.expect(appServices.columnName).toBe(testColumn.key);
    jest.expect(appServices.getSorted(testColumn.key)).toBe(false);
    jest.expect(appServices.getSortedDesc(testColumn.key)).toBe(false);
    jest.expect(appServices.sortArgs).toBe("&$orderBy=createdDateTime");
});

jest.test ('check sorting arguments when initial values are faulty', () => {
    const appServices = new AppServices();
    const testColumn: IColumn = { key: 'lastModifiedDateTime', name: 'Date Modified', fieldName: 'DateModified', minWidth: 150, maxWidth: 200, isResizable: true, showSortIconWhenUnsorted: true, isSorted: appServices.getSorted('lastModifiedDateTime'), isSortedDescending: appServices.getSortedDesc('lastModifiedDateTime')}
    appServices.columnName = testColumn.key;
    appServices.isSorted = false;
    appServices.isSortedDesc = true;
    appServices.sortArgs = "&$orderBy=createdDateTime";

    appServices.onSortChanged(testColumn);
    jest.expect(appServices.columnName).toBe(testColumn.key);
    jest.expect(appServices.getSorted(testColumn.key)).toBe(false);
    jest.expect(appServices.getSortedDesc(testColumn.key)).toBe(true);
    jest.expect(appServices.sortArgs).toBe("&$orderBy=createdDateTime");
});

