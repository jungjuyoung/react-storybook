import React from 'react';
import {action} from '@storybook/addon-actions'

import Button from '../components/Button';


export default {
  title: 'Unit/Button',
  component: Button,
};

const Template= (args) => <Button {...args}/>
export const TestButton = Template.bind({}) 
TestButton.args = {
  children: '테스트 버튼',
  label:'button',
  onClick: action('clicked')
}
export const EmojiButton = Template.bind({})
EmojiButton.args={
  role: 'img',
  children: '🌸 ',
  onClick: action('clicked')
}