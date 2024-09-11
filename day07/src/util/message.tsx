export const getLikeMessage = (msg: string[]) => {
  const count = msg.length;
  if (count === 0) return '';
  if (count === 1) return `Liked by ${msg[0]}`;
  else return `Liked by ${msg[0]} and ${count - 1} others`;
};
