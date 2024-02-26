import {checkType} from "./utils";
import {ToggleQuestion} from "./app/questions/question-toggle";
import {FormGroupQuestion} from "./app/questions/question-formGroup";
import {FormGroupArray} from "./app/questions/question-formArray";

describe('Class type checker', () => {
  it('Should the class form Control', () => {
    const testClass = new ToggleQuestion
    expect(checkType(testClass)).toEqual('FormControl')
  })
  it('Should the class formGroup', () => {
    const testClass = new FormGroupQuestion
    expect(checkType(testClass)).toEqual('FormGroup')
  })
  it('Should the class formArray', () => {
    const testClass = new FormGroupArray()
    expect(checkType(testClass)).toEqual('FormArray')
  })
})
