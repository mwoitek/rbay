import { SchemaFieldTypes } from 'redis';
import { client } from '$services/redis';
import { itemsKey, itemsIndexKey } from '$services/keys';

export const createIndexes = async () => {
	return client.ft.create(
		itemsIndexKey(),
		{
			name: {
				type: SchemaFieldTypes.TEXT
			},
			description: {
				type: SchemaFieldTypes.TEXT
			}
		},
		{
			ON: 'HASH',
			PREFIX: itemsKey('')
		}
	);
};
