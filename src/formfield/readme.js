import { h } from 'preact';
import { Docs, DocsExample, DocProps } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { FormField } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Form Fields", lead: "MDC Form Field provides an mdc-formfield helper class for easily making theme-aware, RTL-aware form field + label combos. It also provides an MDCFormField class for easily making input ripples respond to label events.", module: "@rmwc/formfield", styles: ['@material/form-field/dist/mdc.form-field.css'], docsLink: "https://material.io/develop/web/components/input-controls/form-fields/", examples: examples },
        React.createElement(DocsExample, null,
            React.createElement(FormField, null,
                React.createElement("input", { type: "checkbox", id: "input" }),
                React.createElement("label", { htmlFor: "input" }, "Input Label"))),
        React.createElement(DocProps, { src: propsSrc, components: [{ displayName: 'FormField', component: FormField }] })));
}
