import faker from 'faker/locale/en';
import { Pitch } from '../../../types';

export const generatePitches = (
    contactIds: number[],
    salesIds: number[]
): Pitch[] => {
    return Array.from({ length: 15 }).map((_, index) => {
        const contactId = faker.random.arrayElement(contactIds);
        const salesId = faker.random.arrayElement(salesIds);
        const status = faker.random.arrayElement(['Draft', 'Sent', 'Replied']) as 'Draft' | 'Sent' | 'Replied';
        const createdAt = faker.date.past(1).toISOString();
        const updatedAt = faker.date.between(new Date(createdAt), new Date()).toISOString();

        return {
            id: index + 1,
            subject: faker.lorem.sentence(),
            body: faker.lorem.paragraphs(3),
            contact_id: contactId,
            status,
            sales_id: salesId,
            created_at: createdAt,
            updated_at: updatedAt,
        };
    });
};
