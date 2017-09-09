import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRoutes, Routes, RouterModule } from '@angular/router';

 import { RouterTestingModule } from '@angular/router/testing';


import { LandingComponent } from './landing.component';

let config: Routes = [
  {
      path: '', component: LandingComponent
  }
];

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;

  // beforeEach(async(() => {
  //     TestBed.configureTestingModule({
  //       imports: [RouterTestingModule],
  //       declarations: [ LandingComponent ]
  //     })
  //     .compileComponents();
  //   }));
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingComponent ],
      imports: [ RouterTestingModule, RouterModule ],
      providers: [ provideRoutes(config) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
