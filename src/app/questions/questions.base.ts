

export class QuestionBase<T> {

  private createPlaceholder(key: string): string {
    return key.split("_").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
  }

  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: { key: string, value: string }[];
  checked: boolean;
  nestedQuestions?: QuestionBase<string>[] = [];
  nestedFormGroup?:QuestionBase<any>[] = [];
  placeholder?:string
  hide: boolean

  constructor(options: {
    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: string;
    options?: { key: string, value: string }[];
    checked?:boolean
    formGroupData? : { key: string, value: string }[]
    placeholder?:string
    nestedQuestions?: QuestionBase<string>[];
    nestedFormGroup?:QuestionBase<any>[]
    hide?: boolean


  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = this.createPlaceholder(this.key)
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.checked = options.checked || false
    this.nestedQuestions = options.nestedQuestions || [];
    this.nestedFormGroup = options.nestedFormGroup || []
    this.hide = options.hide || false
    this.placeholder = options.placeholder || this.createPlaceholder(this.key)
  }
}


