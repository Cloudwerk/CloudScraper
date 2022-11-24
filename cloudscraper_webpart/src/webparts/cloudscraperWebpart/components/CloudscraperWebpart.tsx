import * as React from 'react';
import styles from './CloudscraperWebpart.module.scss';
import { ICloudscraperWebpartProps } from './ICloudscraperWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SearchComponents } from 'cloudscraper/dist/'

export default class CloudscraperWebpart extends React.Component<ICloudscraperWebpartProps, {}> {
  public render(): React.ReactElement<ICloudscraperWebpartProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <SearchComponents />
    );
  }
}
