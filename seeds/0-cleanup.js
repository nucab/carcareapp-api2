
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('services').del(),
    knex('users').del()
  );
};
