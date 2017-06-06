import { BloguiPage } from './app.po';

describe('blogui App', () => {
  let page: BloguiPage;

  beforeEach(() => {
    page = new BloguiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
