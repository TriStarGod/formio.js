import type { ComponentType } from "svelte";
import type { Form, FormCreateOptionsType, HtmlElementType } from "./form";
import type { FormBuilder } from "./formbuilder";
type DataType = { _id: string } & any; //Record<string, string | number | boolean | string[] | number[]>;
export type SubmissionCreatedType = {
  data: DataType;
}
export type SubmissionType = SubmissionCreatedType & {
  access: unknown[];
  created: string;
  externalIds: unknown[];
  form: string;
  metadata: {
    headers: {
      accept: "application/json";
      "accept-encoding": string;
      "accept-language": string;
      connection: "keep-alive";
      /**
       * number string
       */
      "content-length": string;
      "content-type": string;
      /**
       * number string
       */
      dnt: string;
      /**
       * ie. localhost:1234
       */
      host: string;
      /**
       * ie. http://localhost:1234
       */
      origin: string;
      /**
       * ie. http://localhost:1234/
       */
      referer: string;
      /**
       * browser
       */
      "sec-ch-us": string;
      /**
       * mobile browser?
       */
      "sec-ch-us-mobile": string;
      /**
       * OS
       * ie. Windows
       */
      "sec-ch-us-plaform": string;
      "sec-ch-us-dest": string;
      /**
       * ie. cors
       */
      "sec-ch-us-mode": string;
      /**
       * ie. same-origin
       */
      "sec-ch-us-site": string;
      /**
       * browser details
       */
      "user-agent": string;
    }
  }
  /**
   * date time
   */
  modified: string;
  owner: string;
  roles: unknown[];
  _id: string;
}
export type DBQueryArrayType<T> =  T[] & {
	limit?: number;
	skip?: number;
  /**
   * total number found on server?
   * length will be at maximum the size of limit
   */
	serverCount: number;
};
export type SubmissionArrayType = DBQueryArrayType<SubmissionType>;
type EventHandlers = {
  /**
   * Used when validated submit was clicked
   * Attempts to save. Save is true only if server responded true
   */
  submit: (submission: SubmissionType, save: boolean) => void;
  submitDone: (dontKnow: unknown) => void;
  change: (changed: unknown) => void;
	// ref: https://formio.github.io/formio.js/app/examples/customwizard.html
	// can add custom events sent by buttons etcs (these are NOT default events)
	// gotoNextPage: () => void;
	// gotoPreviousPage: () => void;
	// wizardSave: () => void;
}
export type Header = {
  header: string;
  value: string;
}
type FlagsType = Record<string, unknown>;
type OptionsType = {
  /**
   * Set this if you would like to enable the save draft feature.
   */
  saveDraft?: boolean;
  /**
   * The throttle for the save draft feature.
   */
  saveDraftThrottle?: boolean;
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
export type FormCreatedOptionsType = {
	/**
	 * Set this if you would like to enable the save draft feature.
	 */
	saveDraft: boolean;
	/**
	 * The throttle for the save draft feature.
	 */
  saveDraftThrottle: boolean;
	/**
	 * Set this form to readOnly
	 */
  readOnly: boolean;
	/**
	 * Set to true to disable the alerts dialog.
	 */
  noAlerts: boolean;
	/**
	 * The translation file for this rendering. @see https://github.com/formio/formio.js/blob/master/i18n.js
	 */
  i18n: boolean;
	/**
	 * Provides a way to inject custom logic into the creation of every element rendered within the form.
	 */
  template: boolean;
}
type ListenHandlers = {

	/**
	 * Runs multiple after next or previous is clicked
	 * Not as reliable as next or prevPage
	 */
	"formio.pagesChanged": {
		prop1: Form;
		prop2: undefined;
	};
	"formio.componentChange": {
		prop1: Form;
		prop2: Form;
	};
	"formio.change": {
		prop1: Form;
		prop2: undefined;
	};
	/**
	 * Runs multiple times
	 */
	"formio.render": {
		prop1: Form;
		prop2: undefined;
	};
	/**
	 * Runs once when next button is clicked
	 */
	"formio.nextPage": {
		prop1: Form;
		prop2: undefined;
	};
	/**
	 * Runs once when previous button is clicked
	 */
	"formio.prevPage": {
		prop1: Form;
		prop2: undefined;
	};
}
/**
 * Renders a Form.io form within the webpage.
 */
export class FormCreatedType {
	onAny: <T extends keyof ListenHandlers>(fnx: (event: T, form: ListenHandlers[T]["prop1"], change: ListenHandlers[T]["prop2"]) => void) => void;
  on: <T extends keyof EventHandlers>(event: T, handler: EventHandlers[T]) => void;
  /**
   * Creates a new Form instance.
   * ***NOTE: first arg can be either HtmlElement or Options object; second arg is optionally an Options Object;
   *
   * @param {Object} options - The options to create a new form instance.
   * @param {boolean} options.saveDraft - Set this if you would like to enable the save draft feature.
   * @param {boolean} options.saveDraftThrottle - The throttle for the save draft feature.
   * @param {boolean} options.readOnly - Set this form to readOnly
   * @param {boolean} options.noAlerts - Set to true to disable the alerts dialog.
   * @param {boolean} options.i18n - The translation file for this rendering. @see https://github.com/formio/formio.js/blob/master/i18n.js
   * @param {boolean} options.template - Provides a way to inject custom logic into the creation of every element rendered within the form.
   */
  constructor(element: HtmlElementType, options?: FormCreatedOptionsType);
  get language(): string;
  get emptyValue(): null;
  componentContext(): unknown;
  /**
   * Sets the language for this form.
   *
   * @param lang
   * @return {Promise}
   */
  set language(lang);
  get componentComponents(): ComponentType[];
  get shadowRoot(): unknown;
  /**
   * Add a language for translations
   *
   * @param code
   * @param lang
   * @param active
   * @return {*}
   */
   addLanguage(code: string, lang: unknown, active?: boolean): void;
  /**
   * Perform the localization initialization.
   * @returns {*}
   */
  localize(): Promise<unknown>;
  keyboardCatchableElement(element: HTMLElement): boolean;
  executeShortcuts(event: Event): void;
  addShortcut(element: HTMLElement, shortcut: unknown): void;
  removeShortcut(element: HTMLElement, shortcut: unknown): void;
  /**
   * Get the embed source of the form.
   *
   * @returns {string}
   */
  get src(): string;
  /**
   * Loads the submission if applicable.
   */
  loadSubmission(): Promise<unknown>;
  /**
   * Set the src of the form renderer.
   *
   * @param value
   * @param options
   */
   setSrc(value: any, options: OptionsType): Promise<unknown>;
  /**
   * Set the Form source, which is typically the Form.io embed URL.
   *
   * @param {string} value - The value of the form embed url.
   *
   * @example
   * import Webform from 'formiojs/Webform';
   * let form = new Webform(document.getElementById('formio'));
   * form.formReady.then(() => {
   *   console.log('The form is formReady!');
   * });
   * form.src = 'https://examples.form.io/example';
   */
  set src(value: string);
  /**
   * Get the embed source of the form.
   *
   * @returns {string}
   */
  get url(): string;
  /**
   * Sets the url of the form renderer.
   *
   * @param value
   * @param options
   */
  setUrl(value: string, options: OptionsType): boolean;
  /**
   * Set the form source but don't initialize the form and submission from the url.
   *
   * @param {string} value - The value of the form embed url.
   */
   set url(value: string);
  /**
   * Called when both the form and submission have been loaded.
   *
   * @returns {Promise} - The promise to trigger when both form and submission have loaded.
   */
   get ready(): Promise<unknown>;
  /**
   * Returns if this form is loading.
   *
   * @returns {boolean} - TRUE means the form is loading, FALSE otherwise.
   */
   get loading(): boolean;
  /**
   * Set the loading state for this form, and also show the loader spinner.
   *
   * @param {boolean} loading - If this form should be "loading" or not.
   */
  set loading(loading: boolean);
  /**
   * Sets the JSON schema for the form to be rendered.
   *
   * @example
   * import Webform from 'formiojs/Webform';
   * let form = new Webform(document.getElementById('formio'));
   * form.setForm({
   *   components: [
   *     {
   *       type: 'textfield',
   *       key: 'firstName',
   *       label: 'First Name',
   *       placeholder: 'Enter your first name.',
   *       input: true
   *     },
   *     {
   *       type: 'textfield',
   *       key: 'lastName',
   *       label: 'Last Name',
   *       placeholder: 'Enter your last name',
   *       input: true
   *     },
   *     {
   *       type: 'button',
   *       action: 'submit',
   *       label: 'Submit',
   *       theme: 'primary'
   *     }
   *   ]
   * });
   *
   * @param {Object} form - The JSON schema of the form @see https://examples.form.io/example for an example JSON schema.
   * @param flags
   * @returns {*}
   */
  setForm(form: Form, flags: FlagsType): unknown;
  /**
   * Gets the form object.
   *
   * @returns {Object} - The form JSON schema.
   */
  get form(): Form;
  /**
   * Sets the form value.
   *
   * @alias setForm
   * @param {Object} form - The form schema object.
   */
  set form(form);
  /**
   * Returns the submission object that was set within this form.
   *
   * @returns {Object}
   */
  get submission(): SubmissionCreatedType;
  /**
   * Sets the submission of a form.
   * Alias for setSubmission
   *
   * @example
   * import Webform from 'formiojs/Webform';
   * let form = new Webform(document.getElementById('formio'));
   * form.src = 'https://examples.form.io/example';
   * form.submission = {data: {
   *   firstName: 'Joe',
   *   lastName: 'Smith',
   *   email: 'joe@example.com'
   * }};
   *
   * @param {Object} submission - The Form.io submission object.
   */
  set submission(submission: SubmissionCreatedType);
  /**
   * Sets a submission and returns the promise when it is ready.
   * @param submission
   * @param flags
   * @return {Promise.<TResult>}
   */
  setSubmission(submission: SubmissionType, flags?: FlagsType): Promise<unknown>;
  /**
   * Saves a submission draft.
   */
  saveDraft(): void;
  /**
   * Restores a draft submission based on the user who is authenticated.
   *
   * @param {userId} - The user id where we need to restore the draft from.
   */
  restoreDraft(userId: string): undefined | unknown;
  mergeData(_this: unknown, _that: unknown): unknown;
  setValue(submission: SubmissionType, flags?: FlagsType): boolean;
  getValue(): SubmissionType;
  /**
   * Build the form.
   */
  init(): unknown;
  executeFormController(): false | undefined;
  destroy(deleteFromGlobal?: boolean): unknown;
  build(element: HTMLElement): Promise<unknown>;
  getClassName(): string;
  redraw(): Promise<unknown>;
  attach(element: HTMLElement): Promise<unknown>;
  hasRequiredFields(): boolean;
  resetValue(): void;
  /**
   * Sets a new alert to display in the error dialog of the form.
   *
   * @param {string} type - The type of alert to display. "danger", "success", "warning", etc.
   * @param {string} message - The message to show in the alert.
   * @param {Object} options
   */
   setAlert(type: "danger" | "warning" | "success", message: string, options?: OptionsType): void;
  /**
   * Focus on selected component.
   *
   * @param {string} key - The key of selected component.
   * @returns {*}
   */
   focusOnComponent(key: string): void;
  /**
   * Show the errors of this form within the alert dialog.
   *
   * @param {Object} error - An optional additional error to display along with the component errors.
   * @returns {*}
   */
  showErrors(error: unknown | unknown[], triggerEvent: boolean): unknown[];
  /**
   * Called when the submission has completed, or if the submission needs to be sent to an external library.
   *
   * @param {Object} submission - The submission object.
   * @param {boolean} saved - Whether or not this submission was saved to the server.
   * @returns {object} - The submission object.
   */
  onSubmit(submission: SubmissionType, saved: boolean): SubmissionType;
  normalizeError(error: string | { details: unknown }): { message: string } | undefined | null | "";
  /**
   * Called when an error occurs during the submission.
   *
   * @param {Object} error - The error that occured.
   */
  onSubmissionError(error: unknown): boolean | unknown;
  /**
   * Trigger the change event for this form.
   *
   * @param changed
   * @param flags
   */
  onChange(flags: FlagsType): void;
  checkData(data: DataType, flags: FlagsType): boolean;
  /**
   * Send a delete request to the server.
   */
  deleteSubmission(): unknown;
  /**
   * Cancels the submission.
   *
   * @alias reset
   */
  cancel(noconfirm?: boolean): boolean;
  setMetadata(submission: SubmissionType): void;
  submitForm(options: OptionsType): Promise<FormCreatedType>;
  setServerErrors(error: { details : { level: unknown }[] }): void;
  executeSubmit(options: OptionsType): Promise<unknown>;
  clearServerErrors(): void;
  /**
   * Submits the form.
   *
   * @example
   * import Webform from 'formiojs/Webform';
   * let form = new Webform(document.getElementById('formio'));
   * form.src = 'https://examples.form.io/example';
   * form.submission = {data: {
   *   firstName: 'Joe',
   *   lastName: 'Smith',
   *   email: 'joe@example.com'
   * }};
   * form.submit().then((submission) => {
   *   console.log(submission);
   * });
   *
   * @param {boolean} before - If this submission occured from the before handlers.
   *
   * @returns {Promise} - A promise when the form is done submitting.
   */
  submit(before?: boolean, options?: unknown): Promise<unknown>;
  submitUrl(URL: string, headers: Header[]): Promise<unknown>;
  triggerRecaptcha(): void;
  nosubmit: boolean;
  conditions: unknown[];
  variables: unknown[];
}
type FormsLoadOptionsType = unknown;
type FormLoadOptionsType = unknown;
type SubmissionLoadOptionsType = unknown;
type SubmissionsLoadOptionsType = unknown;
export type QueryObjType = {
  params: {
    type?: "resource" | "form",
    limit?: number;
		skip?: number;
    /**
     * one or more items
     * ie. "_id,title,name,components"
     */
    select?: string;
		sort?: string;live?: 1;
		[key: `${string}__regex`]: string;
  }
}
export type QueryType = string | QueryObjType;
type MethodType = "POST" | "PUT" | "GET" | "DELETE";
type FormioOptionsType = {
  // Ref: https://github.com/formio/formio.js/blob/master/src/Formio.js
  useSessionToken?: boolean;
  base?: string;
  project?: string;
  namespace?: string;
	ignoreCache?: boolean;
  headers?: {
		"Accept": "application/json";
		"Content-type": "application/json";
    "x-jwt-token"?: string;
		Range?: string;
		"Range-Unit"?: "items",
  }
};
type RequestTypes = "role" | "form" | "submission" | "action";
type RequestsTypes = "roles" | "forms" | "submissions" | "actions";
type PluginType = {
  priority?: number;
  __name: string;
  init?: unknown;
};
type RoleType = {
  admin: boolean;
  created: string;
  default: boolean;
  description: string;
  machineName: string;
  modified: string;
  title: string;
  _id: string;
};

export type HandlerType = "before" | "after";
type ActionType = {
	form: string;
	handler: HandlerType;
	machineName: string;
	method: MethodType;
	name: string;
	priority: number;
	title: string;
	_id: string;
};

type AvailableActionType = {
	access: {
		handler?: boolean;
		method?: boolean;
	};
	defaults: {
		handler: HandlerType[];
		method: ("create" | "update")[];
		name: string;
		priority: number;
		title: string;
	};
	description?: string;
	name: string;
	priority: number;
	settingsForm: any;
	title: string;
};
type UserType = unknown;
type FormioEventType = {
	/**
	 * Error 440
	 * Clears token / user before emitting event
	 */
	"formio.sessionExpired": (body: unknown) => void;
	/**
	 * Error 401
	 */
	"formio.unauthorized": (body: unknown) => void;
	/**
	 * Error 416
	 */
	"formio.rangeIsNotSatisfiable": (body: unknown) => void;
	/**
	 * Clears token / user before emitting event
	 */
	"formio.badToken": (error?: Error) => void;
	/**
	 * If logging out, clears token / user before emitting event
	 * If logged in, provides user object
	 */
	"formio.user": (user?: Record<string, unknown> | null) => void;
}
type FormioEventsType = {
	on: <T extends keyof FormioEventType>(event: T, handler: FormioEventType[T]) => void;
};
type Forms = Form[] & {
	limit: number;
	serverCount: number;
	skip: number;
}
export class Formio {
  constructor(path: string, options?: FormCreateOptionsType);
  static useSessionToken(options?: FormioOptionsType):void;
  index(type: "roles", query?: QueryType, options?: FormioOptionsType): unknown;
  load(type: RequestTypes | RequestsTypes, query?: QueryType, options?: FormioOptionsType): Promise<unknown>;
  save(type: RequestTypes, data: DataType, options?: FormioOptionsType): Promise<unknown>;
  delete(type: RequestTypes, options?: FormioOptionsType): Promise<unknown>;
  makeRequest(type?: "availableActions" | "actionInfo", url?: string, method?: string, data?: DataType, options?: FormioOptionsType): unknown;
  loadProject(query?: QueryType, options?: FormioOptionsType): Promise<unknown>;
	/**
   * Saves or Updates a project.
   *
   * ### Create a new project
   * ```ts
   * const formio = new Formio();
   * formio.saveProject({
   *   title: 'My Project',
   *   path: 'myproject',
   *   name: 'myproject'
   * });
   * ```
   *
   * ### Update an existing project
   * ```ts
   * const formio = new Formio('https://examples.form.io');
   * formio.loadProject().then((project) => {
   *   project.title = 'Title changed';
   *   formio.saveProject(project).then(() => {
   *     console.log('Done saving project!');
   *   });
   * });
   * ```
   *
   * @param {object} data - The project JSON to create or update.
   * @param {object} options - Options to pass to {@link Formio.request}
   * @return {Promise<Object>}
   */
  saveProject(data: unknown, options?: FormioOptionsType): Promise<unknown>;
  deleteProject(options?: FormioOptionsType): Promise<unknown>;
  static loadProjects(query?: QueryType, options?: FormioOptionsType): Promise<unknown>;
  loadRole(options?: FormioOptionsType): Promise<unknown>;
	/**
     * Create a new or Update an existing role within a project.
     *
     * ### Create new Role example
     * ```ts
     * const formio = new Formio('https://examples.form.io');
     * formio.saveRole({
     *   title: 'Employee',
     *   description: 'A person who belongs to a company.'
     * }).then((role) => {
     *   console.log(role);
     * });
     * ```
     *
     * ### Update existing role example
     * ```ts
     * const formio = new Formio('https://examples.form.io/role/234234234234234');
     * formio.loadRole().then((role) => {
     *   role.title = 'Manager';
     *   formio.saveRole(role).then(() => {
     *     console.log('DONE');
     *   });
     * });
     * ```
     *
     * @param {object} role - The Role JSON to create or update.
     * @param {object} options - Options to pass to {@link Formio.request}
     * @return {Promise<Object>}
     */
  saveRole(data?: DataType, options?: FormioOptionsType): Promise<unknown>;
  deleteRole(options?: FormioOptionsType): Promise<unknown>;
  loadRoles(options?: FormioOptionsType): Promise<RoleType[]>;
  loadForm(query?: QueryType, options?: FormioOptionsType): Promise<Form>;
  saveForm(data: DataType, options?: FormioOptionsType): Promise<Form>;
  deleteForm(options?: FormioOptionsType): unknown;
  loadForms(query?: QueryType, options?: FormioOptionsType): Promise<Forms>;
  loadSubmission(query?: QueryType, options?: FormioOptionsType): Promise<SubmissionType>;
  saveSubmission(data: DataType, options?: FormioOptionsType): Promise<SubmissionType>;
  deleteSubmission(options?: FormioOptionsType): unknown;
  loadSubmissions(query?: QueryType, options?: FormioOptionsType): Promise<SubmissionArrayType>;
  loadAction(query?: QueryType, options?: FormioOptionsType): Promise<ActionType>;
  saveAction(data?: DataType, options?: FormioOptionsType): Promise<ActionType>;
  deleteAction(options?: FormioOptionsType): unknown;
  loadActions(query?: QueryType, options?: FormioOptionsType): Promise<DBQueryArrayType<ActionType>>;
  availableActions(): Promise<DBQueryArrayType<AvailableActionType>>;
  actionInfo(name: string): Promise<AvailableActionType>;;
  isObjectId(id: string): unknown;
  getProjectId(): string;
  getFormId(): string;
  currentUser(options?: FormioOptionsType): UserType;
  accessInfo(): unknown;
  /**
   * Returns the JWT token for this instance.
   *
   * @return {*}
   */
  getToken(options?: FormioOptionsType): unknown;
  /**
   * Sets the JWT token for this instance.
   *
   * @return {*}
   */
  setToken(token: unknown, options?: FormioOptionsType): unknown;
  /**
   * Returns a temporary authentication token for single purpose token generation.
   */
  getTempToken(expire: string, allowed: string, options?: FormioOptionsType): unknown;
  /**
   * Get a download url for a submission PDF of this submission.
   *
   * @return {*}
   */
  getDownloadUrl(form: Form): Promise<unknown>;
  uploadFile(storage: unknown, file: unknown, fileName: string, dir: string, progressCallback: unknown, url: string, options?: FormioOptionsType): Promise<unknown>;
  downloadFile(file: unknown, options?: FormioOptionsType): Promise<unknown>;
  deleteFile(file: unknown, options?: FormioOptionsType): Promise<unknown>;
 /**
   * Returns the user permissions to a form and submission.
   *
   * @param user - The user or current user if undefined. For anonymous, use "null"
   * @param form - The form or current form if undefined. For no form check, use "null"
   * @param submission - The submisison or "index" if undefined.
   *
   * @return {create: boolean, read: boolean, edit: boolean, delete: boolean}
   */
  userPermissions(
    user?: unknown,
    form?: unknown,
    submission?: unknown,
  ): Promise<{ create: boolean; read: boolean; edit: boolean; delete: boolean }>;
  /**
   * Determine if the current user can submit a form.
   * @return {*}
   */
  canSubmit(): Promise<unknown>;
  getUrlParts(url: unknown): unknown;
  static getUrlParts(url: string, formio?: Formio): unknown;
  static serialize(obj: any, _interpolate: unknown): unknown;
  static getRequestArgs(formio: Formio, type: string, url: string, method?: MethodType, data?: DataType, options?: FormioOptionsType): {
    url: string;
    method: MethodType;
    data: DataType | null;
    options: FormioOptionsType;
    type?: string;
    formio?: Formio;
  };
  static makeStaticRequest(url: string, method?: string, data?: DataType, options?: FormioOptionsType): unknown;
  static makeRequest(formio?: Formio, type?: string, url?: string, method?: string, data?: DataType, options?: FormioOptionsType): unknown;
  static request(url: string, method?: MethodType, data?: DataType, header?: unknown, options?: FormioOptionsType): Promise<unknown>;
  static get token(): string;
  static set token(token: string);
  static setToken(token?: string, options?: FormioOptionsType): Promise<unknown>;
  static getToken(options?: FormioOptionsType): string;
  static setUser(user: unknown, options?: FormioOptionsType): unknown;
  static getUser(options?: FormioOptionsType): unknown;
  static setBaseUrl(url: string): void;
  static getBaseUrl(): string;
  static setApiUrl(url: string): unknown;
  static getApiUrl(): string;
  static setAppUrl(url: string): unknown;
  static setProjectUrl(url: string): void;
  static setAuthUrl(url: string): void;
  static getAppUrl(): string;
  static getProjectUrl(): string;
  static clearCache(): void;
  static noop(): void; // why?
  static identity(value: string): string; // why?
  static deregisterPlugin(plugin: PluginType): boolean;
  static registerPlugin(plugin: PluginType, name: string): void;
  static getPlugin(name: string): PluginType | null;
  static pluginWait(pluginFn: unknown, ...args: unknown[]): Promise<unknown>;
  static pluginGet(pluginFn: unknown, ...args: unknown[]): Promise<unknown>;
  static pluginAlter(pluginFn: unknown, value: unknown, ...args: unknown[]): unknown;
  static accessInfo(formio?: Formio): Promise<unknown>;
  static projectRoles(formio?: Formio): Promise<unknown>;
  static currentUser(formio?: Formio, options?: FormioOptionsType): Promise<unknown>;
  static logout(formio?: Formio, options?: FormioOptionsType): Promise<unknown>;
  static pageQuery(): unknown;
  static oAuthCurrentUser(formio?: Formio, token?: unknown): unknown;
  static samlInit(options?: FormioOptionsType): boolean;
  static oktaInit(options?: FormioOptionsType): Promise<unknown>;
  static ssoInit(type: "saml" | "okta", options?: FormioOptionsType): unknown;
  static requireLibrary(name: string, property: unknown, src: unknown | unknown[], polling?: boolean): unknown;
  static libraryReady(name: string): Promise<unknown>;
  static addToGlobal(global: Record<string, unknown | Formio>): void;
  static setPathType(type: string): void;
  static getPathType(): string;
  static get ruleEntities(): {
    ValueSources: unknown;
    Conjunctions: unknown;
    Operators: unknown;
    Transformers: unknown;
    QuickRules: unknown;
    Rules: unknown;
  };
  static get GlobalFormio(): Formio;

  public base: string;
  public projectsUrl: string;
  public projectUrl: string;
  public projectId: string;
  public roleUrl: string;
  public roleId: string;
  public formUrl: string;
  public formsUrl: string;
  public formId: string;
  public submissionUrl: string;
  public submissionsUrl: string;
  public submissionId: string;
  public actionsUrl: string;
  public actionId: string;
  public actionUrl: string;
  public vsUrl: string;
  public vId: string;
  public vUrl: string;
  public query: string;
  // public token: string;


  static libraries: Record<string, { loaded: boolean; ready: unknown; }>;
  static Promise: unknown;
  static fetch: unknown;
  static Headers: unknown;
  static baseUrl: string;
  static projectUrl: string;
  static authUrl: string;
  static projectUrlSet: boolean;
  static plugins: unknown;
  static cache: unknown;
  static providers: unknown;
  /**
   * ie. "---VERSION---"
   *
   * @static
   * @type {string}
   * @memberof Formio
   */
  static version: string;
  static pathType: string;
  static events: FormioEventsType; // EventEmitter3

  static namespace: string;
  // static formOnly?: boolean;

  // createform(form: unknown): Promise<unknown>;
  // Ref: https://github.com/formio/formio.js/blob/05ef4cb2f428bce92cb5d072b5f2485fdbb7fcf4/src/Form.js#L317
  static createForm(element: HTMLElement | null, form: string | Form | unknown, options?: FormCreateOptionsType): Promise<FormCreatedType>;

  static use(plugin: PluginType): unknown;
  static builder(element: HTMLElement | null, form: Form, options?: FormioOptionsType): Promise<FormBuilder>;
}
