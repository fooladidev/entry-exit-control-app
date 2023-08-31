import { Injectable } from '@angular/core';
import {ConfigModel} from './config.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public config: ConfigModel;

  constructor() {
    this.config = new ConfigModel();

    this.config.headers = {
      contentTypeValue: 'application/json; charset=utf-8',
      acceptValue: 'application/json'
    },

    this.config.settings = {
      showSSOIndividualProfileService: "true",
      ssoIndividualProfileAddressUrl: "http://79.175.176.249:80/imas.serviceHub/api/Bdsr/contact/individual/iranian/{inquiryId}/addresses",
      ssoIndividualProfileUrl: "http://79.175.176.249:80/imas.serviceHub/api/Bdsr/contact/individual/{inquiryId}/detail",
      TehranOrganasationId: "7704ae68-01ef-4ab6-8780-b4ceb31d08b2",
    }
    this.config.user =  {
      username: 'IMAS:portal:Username',
      userInfo: 'IMAS:portal:UserInfo',
      token: 'IMAS:portal:Token',
      authorizedOperations: 'IMAS:portal:AuthorizedOperations'
    },
    this.config.baseurl = "subsystems";
  }
}
