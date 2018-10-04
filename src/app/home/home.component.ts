import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
  topNavMenu: any; 	
  constructor(private _router : Router) {    
    this.topNavMenu = [{"text":"Grid Top Bar ","expand":false,"id":null,"leaf":false,"icon":"fa fa-table fa 2x","routerLink":null,"children":[{"text":"gridUi","expand":false,"id":"ee932d2b-b4be-4b49-b7d6-11cea6de6341","leaf":true,"icon":"fa fa-file-text-o","routerLink":"gridbc/domainone/gridui","children":null},{"text":"grid two","expand":false,"id":"9da4a45c-8f09-4dd7-bb74-8b5f6b5735a3","leaf":true,"icon":"fa fa-file-text-o","routerLink":"gridbc/domainone/grid-two","children":null}]},{"text":"Test Top Bar","expand":false,"id":null,"leaf":false,"icon":"fa fa-align-justify fa 2x","routerLink":null,"children":[{"text":"testuione","expand":false,"id":"5d193698-e1eb-453e-bdc8-e2c7bf472ab0","leaf":true,"icon":"fa fa-file-text-o","routerLink":"testproectformenus/core/testuione","children":null},{"text":"core","expand":true,"id":"51dab428-e110-4b9e-98ee-102503654d97","leaf":false,"icon":"fa fa-folder-open-o","routerLink":null,"children":[{"text":"testuione","expand":false,"id":"5d193698-e1eb-453e-bdc8-e2c7bf472ab0","leaf":true,"icon":"fa fa-file-text-o","routerLink":"testproectformenus/core/testuione","children":null},{"text":"testui two","expand":false,"id":"8cb4e2e5-04d5-441a-bd04-94b3a4e5c2b8","leaf":true,"icon":"fa fa-file-text-o","routerLink":"testproectformenus/core/testui-two","children":null}]}]}];  }
  routeToLink(data: any) {
       if( data.data.node.children==null && data.data.node.routerLink){
    this._router.navigate([data.data.node.routerLink]);
    }
      }
  
  }
}
