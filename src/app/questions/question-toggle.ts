import {QuestionBase} from "../../question-base";

export class ToggleQuestion extends QuestionBase<boolean> {
    override controlType = 'toggle';
}
