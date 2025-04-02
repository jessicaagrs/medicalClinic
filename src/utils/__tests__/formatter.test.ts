import {
  cleanCaracter,
  formatCNPJ,
  formatPhone,
  isValidEmail,
  isValidURL,
} from '../formatter';

describe('formatter utility functions', () => {
  describe('isValidEmail', () => {
    test('should return true for a valid email', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
    });

    test('should return false for an invalid email', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
    });

    test('should return false for an empty string', () => {
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('formatPhone', () => {
    test('should format a 10-digit phone number correctly', () => {
      expect(formatPhone('1198765432')).toBe('(11) 9876-5432');
    });

    test('should format an 11-digit phone number correctly', () => {
      expect(formatPhone('11998765432')).toBe('(11) 9 9876-5432');
    });

    test('should remove non-numeric characters and format correctly', () => {
      expect(formatPhone('(11) 9-9876-5432')).toBe('(11) 9 9876-5432');
    });
  });

  describe('cleanCaracter', () => {
    test('should remove all non-numeric characters', () => {
      expect(cleanCaracter('123-456.789/0001')).toBe('1234567890001');
    });

    test('should return an empty string if input contains no numeric characters', () => {
      expect(cleanCaracter('abc-def')).toBe('');
    });
  });

  describe('formatCNPJ', () => {
    test('should format a valid CNPJ correctly', () => {
      expect(formatCNPJ('12345678000195')).toBe('12.345.678/0001-95');
    });

    test('should remove non-numeric characters and format correctly', () => {
      expect(formatCNPJ('12.345.678/0001-95')).toBe('12.345.678/0001-95');
    });

    test('should return the input unchanged if it cannot be formatted as a CNPJ', () => {
      expect(formatCNPJ('123')).toBe('123');
    });
  });

  describe('isValidURL', () => {
    test('should return true for a valid URL with http', () => {
      expect(isValidURL('http://example.com')).toBe(true);
    });

    test('should return true for a valid URL with https', () => {
      expect(isValidURL('https://example.com')).toBe(true);
    });

    test('should return false for an invalid URL', () => {
      expect(isValidURL('invalid-url')).toBe(false);
    });

    test('should return false for an empty string', () => {
      expect(isValidURL('')).toBe(false);
    });
  });
});
