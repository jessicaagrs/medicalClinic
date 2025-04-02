import bcrypt from 'bcrypt';
import { prisma } from '../../../prisma/db';
import { loginActions } from '../loginActions';

jest.mock('bcrypt', () => ({
  compare: jest.fn(),
}));

jest.mock('../../../prisma/db', () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
    },
    specialist: {
      findUnique: jest.fn(),
    },
  },
}));

describe('Login Actions', () => {
  const mockUser = {
    id: 'a094a468-6d05-40a1-84f5-255f0190bfaf',
    email: 'user@example.com',
    password: 'hashedPassword123',
    name: 'Test User',
  };

  const mockSpecialist = {
    id: 'e0e75e55-bef0-4b4a-93df-1c43b297d6c7',
    email: 'specialist@example.com',
    password: 'hashedPassword456',
    name: 'Test Specialist',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should must successfully log in as user', async () => {
    // Arrange
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    // Act
    const result = await loginActions.login('user@example.com', 'password123');

    // Assert
    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'user@example.com' },
    });
    expect(bcrypt.compare).toHaveBeenCalledWith(
      'password123',
      'hashedPassword123'
    );
    expect(result).toEqual(mockUser);
  });

  test('should successfully login as an expert', async () => {
    // Arrange
    (prisma.specialist.findUnique as jest.Mock).mockResolvedValue(
      mockSpecialist
    );
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    // Act
    const result = await loginActions.login(
      'specialist@example.com',
      'password456',
      'true'
    );

    // Assert
    expect(prisma.specialist.findUnique).toHaveBeenCalledWith({
      where: { email: 'specialist@example.com' },
    });
    expect(bcrypt.compare).toHaveBeenCalledWith(
      'password456',
      'hashedPassword456'
    );
    expect(result).toEqual(mockSpecialist);
  });

  test('should throw an error when the user is not found', async () => {
    // Arrange
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

    // Act & Assert
    await expect(
      loginActions.login('nonexistent@example.com', 'password')
    ).rejects.toThrow('Usuário não encontrado.');
    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'nonexistent@example.com' },
    });
  });

  test('should throw an error when the specialist is not found', async () => {
    // Arrange
    (prisma.specialist.findUnique as jest.Mock).mockResolvedValue(null);

    // Act & Assert
    await expect(
      loginActions.login('nonexistent@example.com', 'password', 'true')
    ).rejects.toThrow('Usuário não encontrado.');
    expect(prisma.specialist.findUnique).toHaveBeenCalledWith({
      where: { email: 'nonexistent@example.com' },
    });
  });

  test('should throw an error when the password is invalid for the user', async () => {
    // Arrange
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);

    // Act & Assert
    await expect(
      loginActions.login('user@example.com', 'wrongPassword')
    ).rejects.toThrow('Credenciais inválidas.');
    expect(bcrypt.compare).toHaveBeenCalledWith(
      'wrongPassword',
      'hashedPassword123'
    );
  });

  test('should throw an error when the password is invalid for the specialist', async () => {
    // Arrange
    (prisma.specialist.findUnique as jest.Mock).mockResolvedValue(
      mockSpecialist
    );
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);

    // Act & Assert
    await expect(
      loginActions.login('specialist@example.com', 'wrongPassword', 'true')
    ).rejects.toThrow('Credenciais inválidas.');
    expect(bcrypt.compare).toHaveBeenCalledWith(
      'wrongPassword',
      'hashedPassword456'
    );
  });

  test('should handle the case where clinic is "null" (string)', async () => {
    // Arrange
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    // Act
    const result = await loginActions.login(
      'user@example.com',
      'password123',
      'null'
    );

    // Assert
    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'user@example.com' },
    });
    expect(result).toEqual(mockUser);
  });

  test('should handle the case where clinic is undefined', async () => {
    // Arrange
    (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);

    // Act
    const result = await loginActions.login('user@example.com', 'password123');

    // Assert
    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'user@example.com' },
    });
    expect(result).toEqual(mockUser);
  });
});
