export const checkoutPackages = {
	'core-plan': {
		title: 'Core plan',
		description: 'Everything you need to capture more opportunities and keep customers coming back.',
		setupFee: 299,
		monthlyTotal: 297,
		trialDays: 7,
		items: [
			{ key: 'corePlan', name: 'Core plan', price: '$297 / month', recurring: true },
			{ key: 'setupFee', name: 'One-time setup fee', price: '$299', recurring: false },
		],
	},
} as const;

export type CheckoutPackageSlug = keyof typeof checkoutPackages;
