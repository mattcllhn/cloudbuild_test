import { GoogleProjectPage } from './app.po';

describe('google-project App', function() {
  let page: GoogleProjectPage;

  beforeEach(() => {
    page = new GoogleProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
