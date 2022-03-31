import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { MyFeature } from './feature';

import "./style2.css";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-secondElement')
export class MySecondElement extends LitElement {
  myFeature: MyFeature;
  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  constructor() {
    super()
    this.myFeature = new MyFeature;
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `
  }

  private _onClick() {
    this.count++
  }

  foo(): string {
    return 'foo'
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-secondElement': MySecondElement
  }
}
