import { CmpnlssPage } from './app.po';

describe('cmpnlss App', () => {
  let page: CmpnlssPage;

  beforeEach(() => {
    page = new CmpnlssPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
