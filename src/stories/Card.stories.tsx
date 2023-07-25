// Card.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Card from 'app/components/Card';
import { CardProps } from 'app/components/Card/types';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'This is a sample description for the card component.',
  imgSrc: 'https://via.placeholder.com/150', // You should replace this with a real image source.
  link: 'https://nextjs.org/docs', // You can replace this with a real link.
};
