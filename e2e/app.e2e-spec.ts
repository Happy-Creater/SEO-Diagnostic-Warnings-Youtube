import { PilotMonetoringResultAngularPage } from './app.po';

describe('pilot-monetoring-result-angular App', function() {
  let page: PilotMonetoringResultAngularPage;

  beforeEach(() => {
    page = new PilotMonetoringResultAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
