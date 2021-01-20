import nameValidation from './name-validation';

describe('Name Validation', () => {
  it('Returns Guest if name is empty', () => {
    expect(nameValidation('')).toBe('Guest');
  });

  it('Returns Guest if name consist of spaces', () => {
    expect(nameValidation('   ')).toBe('Guest');
  });

  it('Returns trimmed name', () => {
    expect(nameValidation('  NameWithSpaces  ')).toBe('NameWithSpaces');
  });

  it('Returns name', () => {
    expect(nameValidation('NameWithNoSpaces')).toBe('NameWithNoSpaces');
  });
});