import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlearenaComponent } from './battlearena.component';

describe('BattlearenaComponent', () => {
  let component: BattlearenaComponent;
  let fixture: ComponentFixture<BattlearenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattlearenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlearenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
