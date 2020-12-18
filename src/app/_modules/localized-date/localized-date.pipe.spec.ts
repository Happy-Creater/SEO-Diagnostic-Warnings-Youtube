import { LocalizedDatePipe } from './localized-date.pipe';

describe('LocalizedDatePipe', () => {
  it('create an instance', () => {
    const pipe = new LocalizedDatePipe(null);
    expect(pipe).toBeTruthy();
  });
});
