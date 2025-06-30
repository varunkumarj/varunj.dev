export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  // placeholder function - replace with real integration
  console.log("Sending email", data);
  return Promise.resolve();
}
