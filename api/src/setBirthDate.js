export default async event => {
  const data = { ...event.data };

  data.dateOfBirth = data.dateOfBirth || new Date();

  return {
    data
  };
};
