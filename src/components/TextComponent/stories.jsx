import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Est distinctio quasi corporis minus.
    Reiciendis, dolorem autem quibusdam rerum suscipit natus aperiam ipsum
    saepe aliquid sunt nisi hic quis eligendi beatae!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
