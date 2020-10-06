export class LaunchAbstract {
	id: number;
	description: string;
	dueDate: Date;
	paymentDate?: Date;
	value: number;
	launchType: LaunchType;
	category: string;
	person: string;
}