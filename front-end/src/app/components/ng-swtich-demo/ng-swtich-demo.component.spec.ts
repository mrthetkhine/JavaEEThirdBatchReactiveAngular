import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwtichDemoComponent } from './ng-swtich-demo.component';

describe('NgSwtichDemoComponent', () => {
  let component: NgSwtichDemoComponent;
  let fixture: ComponentFixture<NgSwtichDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwtichDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwtichDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
