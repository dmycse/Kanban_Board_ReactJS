const mockData = [
	{
		status: 'backlog',
		tasks: [
						 {
						 id: '11',
						 title: "Bugfix in Backlog",
						 description: "Fix all the bugs"
						 }, 
						 {
						 id: '12',
						 title: "Login page – Backlog",
						 description: "Login page – performance issues"
						 }
					]     
	}, 
	{
		 status: 'ready',
		 tasks: [
						 {
							 id: '21',
							 title: "Bugfix Ready",
							 description: "Fix all the bugs"
						 },
						 {
							 id: '22',
							 title: "Login page – Ready",
							 description: "Login page – performance issues"
						 }
					]     
	},
	{
		status: 'inProgress',
		tasks: [
						 {
							 id: '31',
							 title: "Bugfix In Progress",
							 description: "Fix all the bugs"
						 }, {
							 id: '32',
							 title: "Login page – In Progress",
							 description: "Login page – performance issues"
						 }
					]     
	}, 
	{
		status: 'finished',
		tasks: [
						 {
							 id: '41',
							 title: "Bugfix Finished",
							 description: "Fix all the bugs"
						 },
						 {
							 id: '42',
							 title: "Login page – Finished",
							 description: "Login page – performance issues"
						 }
					]     
	}
	];
	
	export default mockData;