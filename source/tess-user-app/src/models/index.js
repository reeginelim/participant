// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TestDataModel } = initSchema(schema);

export {
  TestDataModel
};