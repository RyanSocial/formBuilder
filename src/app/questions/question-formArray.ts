import {QuestionBase} from "./questions.base";


export class FormGroupArray extends QuestionBase<string> {
    override type = 'FormGroupArray';
    override simpleArray: boolean = true
}
