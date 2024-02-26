import {QuestionBase} from "./questions.base";


export class ToggleQuestion extends QuestionBase<boolean> {
    override controlType = 'toggle';
}
