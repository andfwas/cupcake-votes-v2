const cupcakes = [
	{
		id: 0,
		name: 'Red Velvet',
		ratings: [3, 1, 5, 4],
		baker: 'Peter',
		averageRating: (3 + 1 + 5 + 4) / 4
	},
	{
		id: 1,
		name: 'Chocolate',
		ratings: [4, 5, 5, 4],
		baker: 'Michelle',
		averageRating: (4 + 5 + 5 + 4) / 4
	},
	{
		id: 2,
		name: 'Vanilla',
		ratings: [4, 4, 5, 4],
		baker: 'Jess',
		averageRating: (4 + 4 + 5 + 4) / 4
	},
  {
		id: 3,
		name: 'Cherry',
		ratings: [4, 3, 2, 1],
		baker: 'Clark',
		averageRating: (4 + 3 + 2 + 1) / 4
	},
  {
		id: 4,
		name: 'Blueberry',
		ratings: [1, 3, 2, 1],
		baker: 'Tito',
		averageRating: (1 + 3 + 2 + 1) / 4
	}
];

const title = "cupcakes"

module.exports = cupcakes;
