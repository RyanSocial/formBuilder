import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GlobalControlComponent} from './global-control.component';
import {TextboxQuestion} from "../../questions/question-textbox";
import {By} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('GlobalControlComponent', () => {
  let component: GlobalControlComponent;
  let fixture: ComponentFixture<GlobalControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalControlComponent,BrowserAnimationsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GlobalControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Input properties', () => {
    it('Should contain a type input', () => {
      component.type = 'text'
      expect(component.type).toBeDefined()
    })
    it('Should receive a question of class Question Base', () => {
      component.question = new TextboxQuestion({
        key: 'name',
        label: 'Market Report Name',
        required: true,
        placeholder: 'Market Report Name'
      })
      const inputElement = fixture.debugElement.query(By.css('app-input'))
      expect(inputElement).toBeTruthy()
    })
  })
});
