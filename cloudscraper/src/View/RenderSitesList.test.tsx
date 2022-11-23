import 'jest';
import { IColumn } from '@fluentui/react'
import { AppServices } from '../Model/AppServices';

test('check if sorting a column works', () => {
    const appServices = new AppServices();
    const testColumn: IColumn = { key: 'lastModifiedDateTime', name: 'Date Modified', fieldName: 'DateModified', minWidth: 150, maxWidth: 200, isResizable: true, showSortIconWhenUnsorted: true, isSorted: appServices.getSorted('lastModifiedDateTime'), isSortedDescending: appServices.getSortedDesc('lastModifiedDateTime')}

    appServices.onSortChanged(testColumn);
    expect(appServices.columnName).toBe(testColumn.key);
    expect(appServices.getSorted('lastModifiedDateTime')).toBe(true);
    expect(appServices.getSortedDesc('lastModifiedDateTime')).toBe(false);
    expect(appServices.sortArgs).toBe("&$orderBy=" + testColumn.key);

    appServices.onSortChanged(testColumn);
    expect(appServices.columnName).toBe(testColumn.key);
    expect(appServices.getSorted('lastModifiedDateTime')).toBe(true);
    expect(appServices.getSortedDesc('lastModifiedDateTime')).toBe(true);
    expect(appServices.sortArgs).toBe("&$orderBy=" + testColumn.key + " desc");

    appServices.onSortChanged(testColumn);
    expect(appServices.columnName).toBe(testColumn.key);
    expect(appServices.getSorted('lastModifiedDateTime')).toBe(false);
    expect(appServices.getSortedDesc('lastModifiedDateTime')).toBe(false);
    expect(appServices.sortArgs).toBe("&$orderBy=createdDateTime");
});

