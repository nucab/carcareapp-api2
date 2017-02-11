
exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE TABLE users (
		  id int(10) unsigned NOT NULL AUTO_INCREMENT,
		  fullname varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
		  username varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
		  password varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
		  email varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
		  PRIMARY KEY (id)
		) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
	`);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
