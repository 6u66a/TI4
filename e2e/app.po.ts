import { browser, by, element, By, promise, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText(): promise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }

  getRaceButton(race: string): WebElementPromise {
    return element(by.linkText(race)).getWebElement();
  }

  getSubtitle(): promise.Promise<string> {
    return element(by.css('app-tech-picker div div div h2.subtitle')).getText();
  }

  researchTech(tech: string) {
    const subject: WebElementPromise = element(by.cssContainingText('span', tech))
    .element(by.xpath('..'))
    .element(by.xpath('..'))
    .element(by.xpath('..'))
    .element(by.css('button'))
    .getWebElement();
    subject.click();
    browser.sleep(1000);
  }
}
