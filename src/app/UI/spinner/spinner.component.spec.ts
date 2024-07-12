import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SpinnerComponent} from './spinner.component';
import {ToggleSpinnerService} from "../../shared/services/spinner/toggle-spinner.service";
import {By} from "@angular/platform-browser";


describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  let toggleSpinnerService: ToggleSpinnerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerComponent],
      providers: [ToggleSpinnerService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    toggleSpinnerService = TestBed.inject(ToggleSpinnerService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render spinner when isSpinner is true', () => {
    toggleSpinnerService.setToggle()
    toggleSpinnerService.getToggleStatus()
    fixture.detectChanges();

    const showToggleStatus = component.showToggle;
    const spinner = fixture.debugElement.query(By.css('#spinner'))

    expect(showToggleStatus).toBe(true);
    expect(spinner).toBeTruthy()
  });
});
