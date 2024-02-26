import {FormGroupQuestion} from "./app/questions/question-formGroup";
import {FormGroupArray} from "./app/questions/question-formArray";

export const checkType = <T>(obj: T): string => {
  if (obj instanceof FormGroupQuestion) {
    return 'FormGroup'
  } else if (obj instanceof FormGroupArray) {
    return 'FormArray'
  }
  return 'FormControl'
}

