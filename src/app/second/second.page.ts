import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  myId: any;
  constructor(private activatedRoute: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,
    private router: Router) { }

  ngOnInit() {

    // fetch the id from the router link
    this.myId = this.activatedRoute.snapshot.paramMap.get('myId');
  }

  // show action sheet
  async showActionSheet() {

    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        icon: 'trash',
        handler: () => {

          let navigationExtras: NavigationExtras = { state: { 'component': 'Action Sheet - Delete', 'page': 'Second Page' } };

          this.router.navigate(['third'], navigationExtras);
        }
      }, {
        text: 'Share an object',
        icon: 'share',
        handler: () => {

          let navigationExtras: NavigationExtras = { state: { 'component': 'Action Sheet - Share', 'page': 'Second Page' } };

          this.router.navigate(['third'], navigationExtras);
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {

          let navigationExtras: NavigationExtras = { state: { 'component': 'Action Sheet - Play', 'page': 'Second Page' } };

          this.router.navigate(['third'], navigationExtras);
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {

          let navigationExtras: NavigationExtras = { state: { 'component': 'Action Sheet - Favorite', 'page': 'Second Page' } };

          this.router.navigate(['third'], navigationExtras);

        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });

    await actionSheet.present();
  }

}
