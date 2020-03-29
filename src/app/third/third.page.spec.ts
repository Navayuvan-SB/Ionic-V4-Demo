import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThirdPage } from './third.page';

describe('ThirdPage', () => {
  let component: ThirdPage;
  let fixture: ComponentFixture<ThirdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThirdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
