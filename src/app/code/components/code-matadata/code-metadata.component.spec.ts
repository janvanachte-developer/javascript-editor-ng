import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeMetadataComponent } from './code-metadata.component';

describe('CodeMatadataComponent', () => {
  let component: CodeMetadataComponent;
  let fixture: ComponentFixture<CodeMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeMetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
