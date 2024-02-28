import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BrokersListComponent} from './brokers-list.component';
import {mockBrokers} from "../../../mockData/mock-broker";


describe('BrokersListComponent', () => {
  let component: BrokersListComponent;
  let fixture: ComponentFixture<BrokersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokersListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BrokersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('brokers input', () => {
    it('should receive an input of brokers', () => {
      fixture.componentRef.setInput('brokers', mockBrokers)
      // Mock data has two brokers inside of it
      expect(component.brokers().length).toBe(2)
    })
  })
});
