// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function createUser(registerData: any): Promise<Response> {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerData),
  });

  return response;
}

export const userService = {
  createUser,
};
