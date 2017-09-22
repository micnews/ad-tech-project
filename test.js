import injectMidContentAds from './inject-mid-content-ads';
import articles from './data/articles';

const simpleArticle = articles[0];
const articleWithImages = articles[1];
const articleWithBlacklist = articles[2];

describe('injectMidContentAds()', () => {
  describe('Simple Article', () => {
    document.body.innerHTML = injectMidContentAds(simpleArticle);
    const ads = document.querySelectorAll('.ad');
    const elements = document.querySelectorAll('article > *');

    test('1 ad gets added', () => {
      expect(ads.length).toBe(1);
    });

    test('the ad is placed after the 4th paragraph', () => {
      expect(elements[4].className).toBe('ad');
    });
  });

  describe('Article with Images', () => {
    document.body.innerHTML = injectMidContentAds(articleWithImages);
    const ads = document.querySelectorAll('.ad');
    const elements = document.querySelectorAll('article > *');

    test('3 ads gets added', () => {
      expect(ads.length).toBe(3);
    });

    test('the first ad is placed after the 3rd paragraph (because there\'s an image after the 4th)', () => {
      expect(elements[3].className).toBe('ad');
    });

    test('the rest of the ads get placed normally', () => {
      expect(elements[10].className).toBe('ad');
      expect(elements[16].className).toBe('ad');
    });
  });

  describe('Article with Blacklist', () => {
    document.body.innerHTML = injectMidContentAds(articleWithBlacklist);
    const ads = document.querySelectorAll('.ad');

    test('0 ads gets added', () => {
      expect(ads.length).toBe(0);
    });
  });
});
