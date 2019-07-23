const mockValidUserSignup = {
  firstname: 'Test',
  surname: 'User',
  username: 'testuser',
  description: 'I am a test user',
  email: 'testuser@mail.com',
  phoneNumber: '09099887766',
  password: 'qwerty',
  address: 'test user house address',
  dob: '1990-09-01',
  role: 2,
};

const mockUserWithoutFirstname = {
  surname: 'User',
  username: 'testuser',
  description: 'I am a test user',
  email: 'testfalseuser@mail.com',
  phoneNumber: '09099887766',
  password: 'qwerty',
  address: 'test user house address',
  dob: '1990-09-01',
  role: 2,
};

const mockUserWithoutUsername = {
  firstname: 'Test',
  surname: 'User',
  description: 'I am a test user',
  email: 'testmailuser@mail.com',
  phoneNumber: '09099887766',
  password: 'qwerty',
  address: 'test user house address',
  dob: '1990-09-01',
  role: 2,
};

const mockUserWithoutPassword = {
  firstname: 'Test',
  surname: 'User',
  username: 'testuser',
  description: 'I am a test user',
  email: 'testmailuser@mail.com',
  phoneNumber: '09099887766',
  address: 'test user house address',
  dob: '1990-09-01',
  role: 2,
};

const mockUserWithExistingEmail = {
  firstname: 'Test',
  surname: 'User',
  username: 'testuser',
  description: 'I am a test user',
  email: 'testuser@mail.com',
  phoneNumber: '09099887766',
  password: 'qwerty',
  address: 'test user house address',
  dob: '1990-09-01',
  role: 2,
};

const mockUserWithInvalidEmail = {
  firstname: 'Test',
  surname: 'User',
  username: 'testuser',
  description: 'I am a test user',
  email: 'testusermail.com',
  phoneNumber: '09099887766',
  password: 'qwerty',
  address: 'test user house address',
  dob: '1990-09-01',
  role: 2,
};

const mockUserLogin = {
  email: 'testuser@mail.com',
  password: 'qwerty'
};

const mockUserLoginMissingEmail = {
  email: '',
  password: 'qwerty',
};

const mockUserLoginMissingPassword = {
  email: 'testuser@mail.com',
  password: '',
};

const mockUserLoginInvalidCredentials = {
  email: 'testuser@mailll.com',
  password: 'qwerty',
};

export {
  mockValidUserSignup,
  mockUserWithoutFirstname,
  mockUserWithExistingEmail,
  mockUserWithInvalidEmail,
  mockUserWithoutUsername,
  mockUserWithoutPassword,
  mockUserLogin,
  mockUserLoginMissingEmail,
  mockUserLoginMissingPassword,
  mockUserLoginInvalidCredentials
};
