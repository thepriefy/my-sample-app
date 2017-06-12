import { MySampleAppPage } from './app.po';

describe('my-sample-app App', () => {
  let page: MySampleAppPage;

  beforeEach(() => {
    page = new MySampleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
