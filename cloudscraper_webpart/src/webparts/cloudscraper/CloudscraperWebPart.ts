import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'CloudscraperWebPartStrings';
import { Cloudscraper } from './components/Cloudscraper';
import { ICloudscraperProps } from './components/ICloudscraperProps';
import { AppServices } from './components/Model/AppServices';
// import { getGraph } from '../../pnp-preset';

export interface ICloudscraperWebPartProps {
  description: string;
}

export default class CloudscraperWebPart extends BaseClientSideWebPart<ICloudscraperWebPartProps> {
  private appServices: AppServices = new AppServices();

  protected onInit(): Promise<void> {
    this.appServices.context = this.context;
    return Promise.resolve();
  }

  public render(): void {
    const element: React.ReactElement<ICloudscraperProps> = React.createElement(
      Cloudscraper,
      {
        appServices: this.appServices
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
