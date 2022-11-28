import 'jest';
import React from 'react';
import { AppServices } from '../Model/AppServices';
import { PagingButton } from './PagingButton';

test('dont render PagingButton when there is no nextLink', () => {
    const appServices = new AppServices();
    appServices.nextLink = "";

    expect((appServices.nextLink !== "") ? <PagingButton /> : null).toBe(null);
});

test('render PagingButton when there is a nextLink', () => {
    const appServices = new AppServices();
    appServices.nextLink = "adlkjawjdkawd";

    expect((appServices.nextLink !== "") ? <PagingButton /> : null).toEqual(<PagingButton />);
})