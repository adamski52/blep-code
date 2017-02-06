import { BlepCodePage } from './app.po';

describe('blep-code App', function() {
  let page: BlepCodePage;

  beforeEach(() => {
    page = new BlepCodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
