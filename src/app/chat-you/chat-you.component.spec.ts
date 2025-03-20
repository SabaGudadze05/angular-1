import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatYouComponent } from './chat-you.component';

describe('ChatYouComponent', () => {
  let component: ChatYouComponent;
  let fixture: ComponentFixture<ChatYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatYouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
