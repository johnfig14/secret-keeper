import { SecretKeeperPage } from './app.po';

describe('secret-keeper App', function() {
  let page: SecretKeeperPage;

  beforeEach(() => {
    page = new SecretKeeperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
