import {QuestionBase} from "../../question-base";

export class FormGroupQuestion extends QuestionBase<any> {
    override controlType = 'FormGroup';
    override type = 'FormGroup'
}
