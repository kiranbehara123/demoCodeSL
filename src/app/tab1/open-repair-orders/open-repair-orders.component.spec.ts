import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenRepairOrdersComponent } from './open-repair-orders.component';

describe('OpenRepairOrdersComponent', () => {
  let component: OpenRepairOrdersComponent;
  let fixture: ComponentFixture<OpenRepairOrdersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenRepairOrdersComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenRepairOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
