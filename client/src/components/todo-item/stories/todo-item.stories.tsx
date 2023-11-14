import { StoryObj, type Meta } from '@storybook/react';
import { Tag } from '../../../constants';
import { TodoItemProps } from '../../../types/ComponentProps';
import { TodoItem } from '../todo-item';

type Story = StoryObj<typeof TodoItem>;

const meta = {
  title: 'Components/Todo/Todo Item',
  component: TodoItem,
  tags: ['autodocs'],
  argTypes: {
    className: {
      type: 'string',
      description: 'Custom class can be added to the element.'
    },
    copy: {
      type: 'string',
      description: 'Copy or description of the todo item.'
    },
    tag: {
      control: 'radio',
      options: ['important', 'personal', 'work', 'shopping'],
      description: 'Different tag statuses used for todo.'
    },
    title: {
      type: 'string',
      description: 'Title of the todo item.'
    }
  }
} satisfies Meta<typeof TodoItem>;

export default meta;

const data: TodoItemProps = {
  copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget mauris, scelerisque aliquet tortor. Egestas pretium quam pellentesque sagittis ullamcorper augue felis. Eu enim enim, fermentum ac feugiat ornare diam. Sit amet condimentum eget arcu egestas',
  tag: Tag.personal,
  title: 'Design some UI for Habits app'
};

export const Default: Story = {
  args: {
    copy: data.copy,
    tag: data.tag,
    title: data.title
  }
};

export const NoCopy: Story = {
  args: {
    tag: data.tag,
    title: data.title
  }
};

export const NoTag: Story = {
  args: {
    copy: data.copy,
    title: data.title
  }
};

export const NoCopyAndTag: Story = {
  args: {
    title: data.title
  }
};
