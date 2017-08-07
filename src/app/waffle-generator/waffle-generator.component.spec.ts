import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaffleGeneratorComponent } from './waffle-generator.component';

describe('WaffleGeneratorComponent', () => {
  let component: WaffleGeneratorComponent;
  let fixture: ComponentFixture<WaffleGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaffleGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaffleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
