import { ControlBusFrontPage } from './app.po';

describe('control-bus-front App', function() {
  let page: ControlBusFrontPage;

  beforeEach(() => {
    page = new ControlBusFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
