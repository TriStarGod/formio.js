import type { Form, FormDisplayType } from "./form";
import type { Element } from "./element";

export type FormBuilderOptionsType = unknown;

export class FormBuilder extends Form {
  constructor(element: Element, form: Form, options: FormBuilderOptionsType);
  create(display: FormDisplayType): unknown;
  schema: unknown;
}
