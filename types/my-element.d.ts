import { MyFeature } from './feature';
import { LitElement } from 'lit';
import "./style1.css";
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyElement extends LitElement {
    myFeature: MyFeature;
    /**
     * The name to say "Hello" to.
     */
    name: string;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    constructor();
    render(): import("lit-html").TemplateResult<1>;
    private _onClick;
    foo(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
