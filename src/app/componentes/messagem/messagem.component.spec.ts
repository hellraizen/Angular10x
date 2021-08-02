import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagemComponent } from './messagem.component';

describe('MessagemComponent', () => {
  let component: MessagemComponent;
  let fixture: ComponentFixture<MessagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
