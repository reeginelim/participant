// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ScheduleType = {
  "HOME": "HOME",
  "AWAY": "AWAY",
  "SLEEP": "SLEEP",
  "VACATION": "VACATION"
};

const { EvData, SolarData, BatteryData, EvSchedule, HcSchedule, HcData, TestDataModel, EvSchedFields, HcSchedFields } = initSchema(schema);

export {
  EvData,
  SolarData,
  BatteryData,
  EvSchedule,
  HcSchedule,
  HcData,
  TestDataModel,
  ScheduleType,
  EvSchedFields,
  HcSchedFields
};