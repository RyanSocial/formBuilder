import {QuestionBase} from "./questions.base";

export class TextboxQuestion extends QuestionBase<string | number> {
    override controlType = 'textbox';
}
