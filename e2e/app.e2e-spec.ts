import { PortflClientPage } from './app.po';

describe('portfl-client App', function() {
  let page: PortflClientPage;

  beforeEach(() => {
    page = new PortflClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
