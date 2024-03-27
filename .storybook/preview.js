import { Provider } from 'react-redux';
import store from '../src/store';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n';
import { withRouter } from 'storybook-addon-react-router-v6';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const withRedux = Stroy => {
  return <Provider store={store}>
    <Stroy />
</Provider>
}

const withI18next = (Story) => {
  return (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
  );
 };

export const decorators  = [withRedux, withRouter, withI18next];

export default preview;
