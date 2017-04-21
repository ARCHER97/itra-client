import { ClientItraPage } from './app.po';

describe('client-itra App', function() {
  let page: ClientItraPage;

  beforeEach(() => {
    page = new ClientItraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
