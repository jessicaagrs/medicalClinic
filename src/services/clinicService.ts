// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function createClinic(registerData: any): Promise<Response> {
  const response = await fetch('/api/clinics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerData),
  });

  return response;
}

export const clinicService = {
  createClinic,
};
