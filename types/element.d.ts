import type { EventEmitter } from "./eventEmitter.d";
type callbackFn = () => void;

export class Element {
  options: Record<string, unknown>;
  id: string;
  eventHandlers: unknown[];
  i18next: unknown;
  events: EventEmitter;
  defaultMask: unknown;
  inputMasks: unknown[];
  constructor(options: unknown);
  on(event: "saveComponent", cb: callbackFn, internal?: boolean, once?: boolean): unknown;
  once(event: string, cb: callbackFn, internal?: boolean): unknown;
  onAny(cb: callbackFn): unknown;
  off(event: string): void;
  emit(event: string, data: Record<string, unknown>): void;
  addEventListener(obj: HTMLElement, type: string, func: callbackFn, persistent?: boolean): unknown;
  removeEventListener(obj: Record<string, unknown>, type: unknown): unknown;
  removeEventListeners(): void;
  removeAllEvents(includeExternal: boolean): void;
  destroy(): void;
  appendTo(element: HTMLElement, container: HTMLElement): unknown;
  prependTo(element: HTMLElement, container: HTMLElement): unknown;
  removeChildFrom(element: HTMLElement, container: HTMLElement): unknown;
  ce(type: string, attr?: Record<string, unknown>, children?: HTMLElement | string | Array<HTMLElement | string>): HTMLElement;
  appendChild(element: unknown, child: unknown): unknown;
  maskPlaceholder(mask: HTMLElement): string;
  setInputMask(input: HTMLElement, inputMask: string, placeholder: boolean): void;
  t(text: string, params?: Record<string, unknown>): string;
  text(text: string): Text;
  attr(element: HTMLElement, attr: Record<string, unknown>): void;
  hasClass(element: HTMLElement | unknown, className: string): boolean;
  addClass(element: HTMLElement, className: string): unknown;
  removeClass(element: HTMLElement, className: string): unknown;
  empty(element: HTMLElement): void;
  evalContext(additional: unknown): unknown;
  interpolate(string: unknown, data: unknown): unknown;
  evaluate(
    func: unknown,
    args: { component: unknown; form: unknown; instance: unknown; row: unknown; data: unknown } | unknown,
    ret: unknown,
    tokenize?: unknown,
  ): unknown;
  hook(...args: unknown[]): unknown;
}
