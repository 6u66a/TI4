import { AppPage } from './app.po';

describe('ti4 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('TI4 Tech Helper');
  });

  it('click arborec', () => {
    const anchor = page.getRaceButton('Arborec');
    anchor.click();
    expect(page.getSubtitle()).toBe('Arborec');
    page.researchTech('Plasma Scoring');
    page.researchTech('Duranium Armor');
  });
});
