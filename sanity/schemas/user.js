export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'favouriteGames',
      title: 'Favourite Games',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'game' } }],
    },
  ],
};