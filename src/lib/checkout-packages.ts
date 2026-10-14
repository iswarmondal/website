export const checkoutPackages = {
	'ai-receptionist': {
		title: 'AI Receptionist',
		description: 'An inbound first response for every customer call your team cannot answer.',
		monthlyTotal: 497,
		items: [
			{ key: 'aiReceptionist', name: 'AI Receptionist', price: '$497 / month', recurring: true },
			{ key: 'websiteRedesign', name: 'Website Redesign', price: '$0', recurring: false },
		],
	},
	'ai-receptionist-with-reputation': {
		title: 'AI Receptionist + Reputation Management',
		description: 'Answer every call and keep the positive reviews coming.',
		monthlyTotal: 696,
		items: [
			{ key: 'aiReceptionist', name: 'AI Receptionist', price: '$497 / month', recurring: true },
			{ key: 'reputationManagement', name: 'Reputation Management', price: '$199 / month', recurring: true },
			{ key: 'websiteRedesign', name: 'Website Redesign', price: '$0', recurring: false },
		],
	},
} as const;

export type CheckoutPackageSlug = keyof typeof checkoutPackages;
