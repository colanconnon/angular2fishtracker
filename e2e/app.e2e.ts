import { Fishtrackerangular2Page } from './app.po';

describe('fishtrackerangular2 App', function() {
  let page: Fishtrackerangular2Page;

  beforeEach(() => {
    page = new Fishtrackerangular2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fishtrackerangular2 works!');
  });
});
