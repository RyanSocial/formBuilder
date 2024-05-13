import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSentimentComponent } from './news-sentiment.component';

describe('NewsSentimentComponent', () => {
  let component: NewsSentimentComponent;
  let fixture: ComponentFixture<NewsSentimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsSentimentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
