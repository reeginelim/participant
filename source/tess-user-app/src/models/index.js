// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SolarData, BatteryData, EvSchedule, HcSchedule, HcData, TestDataModel } = initSchema(schema);

export {
  SolarData,
  BatteryData,
  EvSchedule,
  HcSchedule,
  HcData,
  TestDataModel
};