import { StoryObj, type Meta } from '@storybook/react';
import { Tag } from '../../../constants';
import { TodoItems } from '../../../types/Types';
import { TodoList } from '../todo-list';

type Story = StoryObj<typeof TodoList>;

const meta = {
  title: 'Components/Todo/Todo List',
  component: TodoList,
  tags: ['autodocs']
} satisfies Meta<typeof TodoList>;

export default meta;

const data: TodoItems = [
  {
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mauris, scelerisque aliquet tortor. Egestas pretium quam pellentesque sagittis ullamcorper augue felis. Eu enim enim, fermentum ac feugiat ornare diam. Sit amet condimentum eget arcu egestas.',
    isCompleted: false,
    tag: Tag.important,
    title: 'Clean the turtle pond ASAP !!'
  },
  {
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mauris, scelerisque aliquet tortor. Egestas pretium quam pellentesque sagittis ullamcorper augue felis. Eu enim enim, fermentum ac feugiat ornare diam. Sit amet condimentum eget arcu egestas.',
    isCompleted: false,
    title: 'Design some UI for Habits app'
  },
  {
    isCompleted: true,
    title: 'Breathe a little'
  },
  {
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mauris, scelerisque aliquet tortor. Egestas pretium quam pellentesque sagittis ullamcorper augue felis. Eu enim enim, fermentum ac feugiat ornare diam. Sit amet condimentum eget arcu egestas.',
    isCompleted: false,
    tag: Tag.shopping,
    title: 'Get some cola at the shop'
  },
  {
    copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mauris, scelerisque aliquet tortor. Egestas pretium quam pellentesque sagittis ullamcorper augue felis. Eu enim enim, fermentum ac feugiat ornare diam. Sit amet condimentum eget arcu egestas.',
    isCompleted: false,
    tag: Tag.personal,
    title: 'Do 10 press-ups later tonight'
  }
];

export const Default: Story = {
  args: {
    list: data
  }
};
