import { TwineTrailPage } from './app.po';

describe('twine-trail App', function() {
  let page: TwineTrailPage;

  beforeEach(() => {
    page = new TwineTrailPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
