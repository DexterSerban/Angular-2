import { BossPage } from './app.po';

describe('boss App', function() {
  let page: BossPage;

  beforeEach(() => {
    page = new BossPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
