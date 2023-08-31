import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlHelper {
  private redirectToSubSystemAsNewWindow(subsystem: string, url: string){
    window.open(subsystem + '/' + url, '_blank');
  }

  redirectToPortState(componentRoute: string, id?: string){
    this.redirectToSubSystemAsNewWindow('portStateControl', componentRoute + '/' + (id != undefined? id : ''));
  }
  redirectToCommon(componentRoute: string, id?: string){
    this.redirectToSubSystemAsNewWindow('common', componentRoute + '/' + (id != undefined? id : ''));
  }

  redirectToVesselFlag(componentName: string, id?: string){
    window.open('vessel-flag/' + componentName + '/' + (id != undefined? id : ''), '_blank');
  }

  redirectToEntranceExit(componentRoute: string, id?: string){
    this.redirectToSubSystemAsNewWindow('entranceExit', componentRoute + '/' + (id != undefined? id : ''));
  }
}
