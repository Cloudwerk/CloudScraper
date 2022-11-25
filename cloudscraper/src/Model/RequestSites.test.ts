import { IColumn } from '@fluentui/react';
import 'jest';
import { graphConfig } from '../authConfig';
import { AppServices } from './AppServices';
import graphResponseMockData from './mockData';
import { decodeJSON } from './RequestSites';
import fetch from 'node-fetch';

test('compare array length before and after json decoding', () => {
    const prevAmount: number = graphResponseMockData.length;
    const newAmount: number = decodeJSON(graphResponseMockData).length;

    expect(newAmount).toBe(prevAmount);
});

test('check amount of sites after loading more results and sorting', () => {
    const appServices = new AppServices();
    const testColumn: IColumn = { key: 'lastModifiedDateTime', name: 'Date Modified', fieldName: 'DateModified', minWidth: 150, maxWidth: 200, isResizable: true, showSortIconWhenUnsorted: true, isSorted: appServices.getSorted('lastModifiedDateTime'), isSortedDescending: appServices.getSortedDesc('lastModifiedDateTime')}
    const initialCounterValue: number = appServices.loadCounter
    const loadCounterIncrease: number = 3;

    appServices.loadCounter += loadCounterIncrease
    appServices.onSortChanged(testColumn);

    expect(appServices.loadCounter).toEqual(initialCounterValue + loadCounterIncrease);
});

// Does currently not work :(
    // => if thrown away, uninstall node-fetch
// test('request to graph works', async () => {
//     const appServices = new AppServices();
//     const headers: any = []
//     // const bearer = `Bearer ${appServices.userAccessToken}`;
//     let errorMessage: any;

//     // headers.append("Authorization", bearer);
//     const options = {
//         method: "GET",
//         // headers: headers,
//     };

//     let graphValues: any[] = []
//     await fetch(graphConfig.graphEndPoint + appServices.searchArgs + appServices.sortArgs + "&$top=" + `${appServices.amountSites * appServices.loadCounter}`, options)
//         .then(response => response.json()
//         .then((response: any) => {
//             graphValues = response.value;
//             if (response["@odata.nextLink"]) {
//                 appServices.nextLink = response["@odata.nextLink"];
//             } else {
//                 appServices.nextLink = "";
//             }
//         }))
//         .catch((error) => {
//             errorMessage = error;
//         })

//     expect(errorMessage).toContain('401');
    
// });