const jest = require('@jest/globals');
import * as React from 'react';
import { AppServices } from '../Model/AppServices';
import { PagingButton } from './PagingButton';

jest.test('dont render PagingButton when there is no nextLink', () => {
    const appServices = new AppServices();
    appServices.nextLink = "";

    jest.expect((appServices.nextLink !== "") ? <PagingButton /> : null).toBe(null);
});

jest.test('render PagingButton when there is a nextLink', () => {
    const appServices = new AppServices();
    appServices.nextLink = "adlkjawjdkawd";

    jest.expect((appServices.nextLink !== "") ? <PagingButton /> : null).toEqual(<PagingButton />);
})