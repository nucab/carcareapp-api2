
exports.seed = function(knex, Promise) {
	return Promise.all([
		// Inserts seed entries
		knex('services').insert([
			{
				"serviceType": "engine",
				"brandName": "Mobil",
				"marking": "15W-20"
			},
			{
				"serviceType": "engine",
				"brandName": "Havoline Synthetic",
				"marking": "15W-55"
			},
			{
				"serviceType": "engine",
				"brandName": "Motul TRD Sport Engine",
				"marking": "15W-40"
			},
			{
				"serviceType": "transmission",
				"brandName": "Delo® Gold Ultra SAE",
				"marking": "15W-40"
			}
		])
	]);
};
