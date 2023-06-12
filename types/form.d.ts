import { Formio, SubmissionType } from "formiojs/types/formio";
import type { Element } from "./element";

export type FormioNextErrors = {
	message: string;
}[];
export type FormCreateOptionsType = {
  // Ref: https://github.com/formio/formio.js/blob/master/docs/file/src/Webform.js.html
  name?: string;
  attachMode?: "builder";
  building?: boolean;
  submitOnEnter?: boolean;
  baseUrl?: string;
  i18n?: {
    lng?: string;
  };
  language?: string;
  saveDraft?: boolean;
  saveDraftThrottle?: number;
  src?: unknown;
  components?: ComponentType[];
  skipDraftRestore?: boolean;
  submissionTimezone?: string;
  readOnly?: boolean;
  noAlerts?: boolean;
  // Ref: https://github.com/formio/formio.js/blob/master/docs/file/src/components/base/Base.js.html
  i18next?: unknown;
  events?: unknown;
  row?: unknown;
  viewAsHtml?: boolean;
  icons?: unknown;
  inputsOnly?: boolean;
  highlightErrors?: boolean;
  builder?: boolean;
  showHiddenFields?: boolean;
  /**
   * Override internal hooks
   * Ref: https://github.com/formio/formio.js/blob/master/src/Webform.js
   */
  hooks?: {
		attachWebForm?: (webform: Form) => void;
		/**
		 * Runs after cancel request sent
		 * Return false to cancel cancel request
		 */
		beforeCancel?: () => boolean;
		/**
		 * Runs before custom validation
		 * Use custom validation for error management
		 */
    beforeSubmit?: (submission: SubmissionType, next: (errors?: string, data?: { _vnote: string }) => void) => void;
		/**
		 * Best to use for error management
		 * Runs after (within) beforeSubmit
		 */
    customValidation?: (submission: SubmissionType, next: (errors?: string | FormioNextErrors) => void) => void;
  };
  // Ref: https://github.com/formio/formio.js/blob/master/src/components/textarea/TextArea.js
  htmlView?: boolean;
  // Ref: https://github.com/formio/formio.js/blob/master/src/components/form/Form.js
  renderMode?: "html";
  formio?: {
    formsUrl: string;
  };
  breadcrumbSettings?: {
		clickable?: boolean;
	};
  buttonSettings?: {
		showPrevious?: boolean;
		showCancel?: boolean;
		showSubmit?: boolean;
		showNext?: boolean;
	};
  template?: unknown;
  templates?: unknown;
  iconset?: unknown;
  fileService?: unknown;
  onChange?: unknown;
  base?: string;
  project?: string;
	allowPrevious?: boolean;
	properties?: {
		wizardButtonOrder?: ("cancel" | "previous" | "next" | "submit")[];
	};
	show?: Record<string, boolean>;
	hide?: Record<string, boolean>;
};

type TagType = string;
type ValidateType = {
  required?: boolean;
  minLength?: string;
  maxLength?: string;
  pattern?: string;
  custom?: string;
  customPrivate?: boolean;
};
type PropertiesType = unknown;
type ConditionalType = {
  show: string;
  when: string | null;
  eq: string;
};
type AttrType = {
  value: string;
  attr: string;
};

export type FieldType = {
  input: boolean;
  key: string;
  label: string;
  tableView?: boolean;
  persistent?: boolean;
  hidden?: boolean;
  tags?: TagType[];
  properties?: PropertiesType;
  disabled?: boolean;
  components?: ComponentType[];
};
export type TextFieldType = {
  type: "textfield";
  autofocus: boolean;
  inputType: "text";
  inputMask: string;
  placeholder: string;
  prefix: string;
  suffix: string;
  multiple: boolean;
  defaultValue: string;
  protected: boolean;
  unique: boolean;
  clearOnHide: boolean;
  spellcheck: boolean;
  validate: ValidateType;
  conditional: ConditionalType;
  labelPosition: "top";
  inputFormat: "plain";
} & FieldType;
export type EmailType = {
  type: "email";
  defaultValue: string;
  inputType: "email";
  placeholder: string;
  prefix: string;
  protected: boolean;
  suffix: string;
  unique: boolean;
} & FieldType;
export type PasswordType = {
  inputType: string;
  placeholder: string;
  prefix: string;
  protected: boolean;
  suffix: boolean;
  type: "password";
} & FieldType;
export type PhoneNumberType = {
  type: "phoneNumber";
  autofocus: boolean;
  inputType: "tel";
  inputMask: string;
  placeholder: string;
  prefix: string;
  suffix: string;
  multiple: boolean;
  protected: boolean;
  unique: boolean;
  defaultValue: string;
  clearOnHide: boolean;
  validate: ValidateType;
  labelPosition: "top";
  inputFormat: "plain";
  conditional: ConditionalType;
  lockKey: boolean;
  source: string;
} & FieldType;
export type ButtonType = {
  action: "submit";
  block: boolean;
  disableOnInvalid: boolean;
  leftIcon: string;
  rightIcon: string;
  size: "md";
  theme: "primary";
  type: "button";
} & FieldType;
export type HtmlElementType = {
  tag: string;
  attrs: AttrType[];
  className: string;
  content: string;
  type: "htmlelement";
  hideLabel: boolean;
  conditional: ConditionalType
} & FieldType;

export type SignatureType = {
  placeholder: string;
  footer: string;
  /**
   * ie. 100%
   */
  width: string;
  /**
   * ie. 150px
   */
  height: string;
  penColor: string;
  /**
   * ie. rgb(245,245,235)
   */
  backgroundColor: string;
  minWidth: string;
  maxWidth: string;
  protected: boolean;
  clearOnHide: boolean;
  validate: ValidateType,
  type: "signature",
  hideLabel: boolean;
  conditional: ConditionalType;
} & FieldType
export type PanelType = {
  type: "panel";
  title: string;
  isNew: boolean;
  clearOnHide: boolean;
  theme: "default";
  hideLabel: boolean;
} & FieldType;
type ColumnType = {
	components: ComponentType[];
  width: number;
	size: "md",
	currentWidth: number;
  offset: number;
  push: number;
  pull: number;
}
export type ColumnsType = {
  clearOnHide?: boolean;
  columns: ColumnType[];
  type: "columns";
  conditional?: ConditionalType;
  lockKey?: boolean;
  source?: string;
  hideLabel?: boolean;
} & FieldType
export type SelectOptionType = {
  label: string;
  value: string;
}
export type SelectsType = {
  data?: {
    values: SelectOptionType[];
  };
  defaultValue: string[];
  multiple: true;
  tableView: boolean;
  tooltip: string;
  type: "select",
  widget: "choicesjs" | "html5";
} & FieldType;

export type ComponentType = TextFieldType | EmailType | PasswordType | PhoneNumberType | ButtonType | HtmlElementType | SignatureType | PanelType | ColumnsType | SelectsType;
export type FormDisplayType = "wizard" | "form" | "pdf";
export type JSONSchemaType = Record<string, unknown>;
export type FormOptionsType = {
  /**
   * Set this form to readOnly
   */
  readOnly?: boolean;
  /**
   * Set to true to disable the alerts dialog.
   */
  noAlerts?: boolean;
  /**
   * The translation file for this rendering. @see https://github.com/formio/formio.js/blob/master/i18n.js
   */
  i18n?: boolean;
  /**
   * Provides a way to inject custom logic into the creation of every element rendered within the form.
   */
  template?: boolean;
};
export type AccessType = {
  type: "create_all" | "read_all" | "update_all" | "delete_all" | "create_own" | "read_own" | "update_own" | "delete_own";
  roles: string[];
};

type EmbedType = {
  src: string;
  class?: string;
  styles?: string;
};

export class Form extends Element {
  /**
   * Sets the form. Either as JSON or a URL to a form JSON schema.
   *
   * @param {string|object} formParam - Either the form JSON or the URL of the form json.
   * @return {*}
   */
  set form(params: string | Form);
  instance: unknown;
  ready: Promise<unknown>;
  /**
 * Creates an easy to use interface for embedding webforms, pdfs, and wizards into your application.
 *
 * @param {Element} element - The DOM element you wish to render this form within.
 * @param {JSONSchemaType | string} form - Either a Form JSON schema or the URL of a hosted form via. form.io.
 * @param {FormOptionsType} options - The options to create a new form instance.
 * @param {boolean} options.readOnly - Set this form to readOnly
 * @param {boolean} options.noAlerts - Set to true to disable the alerts dialog.
 * @param {boolean} options.i18n - The translation file for this rendering. @see https://github.com/formio/formio.js/blob/master/i18n.js
 * @param {boolean} options.template - Provides a way to inject custom logic into the creation of every element rendered within the form.
 *
 * @example
 * import Form from 'formiojs/Form';
 * const form = new Form(document.getElementById('formio'), 'https://examples.form.io/example');
 * form.build();
 */
  constructor(element: Element, form: JSONSchemaType | string, options: FormOptionsType, readOnly?: boolean, noAlerts?: boolean, i18n?: boolean, template?: boolean);
  create(display: FormDisplayType): unknown;
  errorForm(error: string | { message: string }): {
    components: {
      label: string,
      tag: string,
      className: "string";
      attrs: AttrType[];
      key: string;
      type: string;
      input: false;
      content: string;
    }[];
  }
  setForm(formParam?: Form): Promise<unknown>;
  getSubmission(formio: Formio, opts: unknown): Promise<unknown>;
  /**
   * Returns the loaded forms JSON.
   *
   * @return {object} - The loaded form's JSON
   */
  get form(): Form;
  /**
   * Changes the display of the form.
   *
   * @param {string} display - The display to set this form. Either "wizard", "form", or "pdf"
   * @return {Promise<T>}
   */
  setDisplay(display: FormDisplayType): Promise<unknown>;
  empty(): void;
  static embed(embed: EmbedType): Promise<unknown>;
  /**
   * Sanitize an html string.
   *
   * @param string
   * @returns {*}
   */
  sanitize(dirty: string, forceSanitize: boolean): string;
  setContent(element: HTMLElement, content: string, forceSanitize: string): boolean;
  /**
   * Build a new form.
   *
   * @return {Promise<T>}
   */
  build(): Promise<unknown>;
  render(): Promise<unknown>;
  attach(element: HTMLElement): Promise<unknown>;

  access: AccessType[];
  created: string;
  /**
   * Used to control display
   * Form, Wizard, PDF
   *
   * @type {FormDisplayType}
   * @memberof Form
   */
  display: FormDisplayType;
  machineName: string;
  modified: string;
  name: string;
  owner: string | null;
  path: string;
  submissionAccess: AccessType[];
  title: string;
  components: ComponentType[];
  /**
   * Can only be resource (noun) or form (verb)
   *
   * @type {("resource" | "form")}
   * @memberof Form
   */
  type: "resource" | "form";
  _id: string;
  tags: TagType[];
}
