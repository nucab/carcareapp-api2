
exports.up = function(knex, Promise) {
	return knex.raw(`
    CREATE TABLE services (
		  id int(10) unsigned NOT NULL AUTO_INCREMENT,
		  serviceType varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
		  replacementDate datetime DEFAULT NULL,
		  brandName varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
		  marking varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
		  remarks varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
		  PRIMARY KEY (id)
		) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
	`);
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('services');
};
