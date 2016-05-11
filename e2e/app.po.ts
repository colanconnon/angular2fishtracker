export class Fishtrackerangular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fishtrackerangular2-app h1')).getText();
  }
}
