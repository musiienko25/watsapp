const getRecipientEmail = (users:any, userLoggedIn:any) =>
  users?.find((userToFilter:any) => userToFilter !== userLoggedIn.email);

export default getRecipientEmail;