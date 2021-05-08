import {Meta, Story} from '@storybook/angular/types-6-0';
import {CodeBoxComponent} from "./code-box.component";
import {moduleMetadata} from "@storybook/angular";

export default {
    title: 'shared/components/CodeBox',
    component: CodeBoxComponent,
    decorators: [
        moduleMetadata({
            //👇 Imports both components to allow component composition with Storybook
            declarations: [CodeBoxComponent],
            imports: [
            ],
        }),
    ],
} as Meta;

const Template: Story<CodeBoxComponent> = (args: CodeBoxComponent) => ({
    props: args
});

export const Empty = Template.bind({});
Empty.args = {
    value: ''
};

export const InvalidCode = Template.bind({});
InvalidCode.args = {
    value: 'lkjhlkdfjas767hioahsdf'
};
