import 'jest';
import React from 'react';
import { AppServices } from '../Model/AppServices';
import { PagingButton } from './PagingButton';

test ('only render button when there are more results', () => {
    const appServices = new AppServices();

    expect((appServices.nextLink !== "") ? <PagingButton /> : null).toBe(null);

    appServices.nextLink = "adlkjawjdkawd";

    expect((appServices.nextLink !== "") ? <PagingButton /> : null).toEqual(<PagingButton />);
});