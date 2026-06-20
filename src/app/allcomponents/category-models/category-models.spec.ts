import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryModels } from './category-models';

describe('CategoryModels', () => {
  let component: CategoryModels;
  let fixture: ComponentFixture<CategoryModels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryModels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryModels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
