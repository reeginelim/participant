/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSolarDataInput = {
  id?: string | null,
  device_id?: string | null,
  inverter?: string | null,
  inverter_model?: string | null,
  pv_in?: string | null,
  pv_model?: string | null,
  pv_sys?: string | null,
  _version?: number | null,
};

export type ModelSolarDataConditionInput = {
  device_id?: ModelStringInput | null,
  inverter?: ModelStringInput | null,
  inverter_model?: ModelStringInput | null,
  pv_in?: ModelStringInput | null,
  pv_model?: ModelStringInput | null,
  pv_sys?: ModelStringInput | null,
  and?: Array< ModelSolarDataConditionInput | null > | null,
  or?: Array< ModelSolarDataConditionInput | null > | null,
  not?: ModelSolarDataConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type SolarData = {
  __typename: "SolarData",
  id: string,
  device_id?: string | null,
  inverter?: string | null,
  inverter_model?: string | null,
  pv_in?: string | null,
  pv_model?: string | null,
  pv_sys?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateSolarDataInput = {
  id: string,
  device_id?: string | null,
  inverter?: string | null,
  inverter_model?: string | null,
  pv_in?: string | null,
  pv_model?: string | null,
  pv_sys?: string | null,
  _version?: number | null,
};

export type DeleteSolarDataInput = {
  id: string,
  _version?: number | null,
};

export type CreateBatteryDataInput = {
  id?: string | null,
  device_id?: string | null,
  battery_info?: string | null,
  charger_info?: string | null,
  charging?: string | null,
  cost?: string | null,
  desired_status?: string | null,
  flexibility?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type ModelBatteryDataConditionInput = {
  device_id?: ModelStringInput | null,
  battery_info?: ModelStringInput | null,
  charger_info?: ModelStringInput | null,
  charging?: ModelStringInput | null,
  cost?: ModelStringInput | null,
  desired_status?: ModelStringInput | null,
  flexibility?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelBatteryDataConditionInput | null > | null,
  or?: Array< ModelBatteryDataConditionInput | null > | null,
  not?: ModelBatteryDataConditionInput | null,
};

export type BatteryData = {
  __typename: "BatteryData",
  id: string,
  device_id?: string | null,
  battery_info?: string | null,
  charger_info?: string | null,
  charging?: string | null,
  cost?: string | null,
  desired_status?: string | null,
  flexibility?: string | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateBatteryDataInput = {
  id: string,
  device_id?: string | null,
  battery_info?: string | null,
  charger_info?: string | null,
  charging?: string | null,
  cost?: string | null,
  desired_status?: string | null,
  flexibility?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type DeleteBatteryDataInput = {
  id: string,
  _version?: number | null,
};

export type CreateEvScheduleInput = {
  id?: string | null,
  device_id?: string | null,
  away?: string | null,
  home?: string | null,
  sleep?: string | null,
  vacation?: string | null,
  _version?: number | null,
};

export type ModelEvScheduleConditionInput = {
  device_id?: ModelStringInput | null,
  away?: ModelStringInput | null,
  home?: ModelStringInput | null,
  sleep?: ModelStringInput | null,
  vacation?: ModelStringInput | null,
  and?: Array< ModelEvScheduleConditionInput | null > | null,
  or?: Array< ModelEvScheduleConditionInput | null > | null,
  not?: ModelEvScheduleConditionInput | null,
};

export type EvSchedule = {
  __typename: "EvSchedule",
  id: string,
  device_id?: string | null,
  away?: string | null,
  home?: string | null,
  sleep?: string | null,
  vacation?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateEvScheduleInput = {
  id: string,
  device_id?: string | null,
  away?: string | null,
  home?: string | null,
  sleep?: string | null,
  vacation?: string | null,
  _version?: number | null,
};

export type DeleteEvScheduleInput = {
  id: string,
  _version?: number | null,
};

export type CreateHcScheduleInput = {
  id?: string | null,
  device_id?: string | null,
  away?: string | null,
  home?: string | null,
  sleep?: string | null,
  vacation?: string | null,
  _version?: number | null,
};

export type ModelHcScheduleConditionInput = {
  device_id?: ModelStringInput | null,
  away?: ModelStringInput | null,
  home?: ModelStringInput | null,
  sleep?: ModelStringInput | null,
  vacation?: ModelStringInput | null,
  and?: Array< ModelHcScheduleConditionInput | null > | null,
  or?: Array< ModelHcScheduleConditionInput | null > | null,
  not?: ModelHcScheduleConditionInput | null,
};

export type HcSchedule = {
  __typename: "HcSchedule",
  id: string,
  device_id?: string | null,
  away?: string | null,
  home?: string | null,
  sleep?: string | null,
  vacation?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateHcScheduleInput = {
  id: string,
  device_id?: string | null,
  away?: string | null,
  home?: string | null,
  sleep?: string | null,
  vacation?: string | null,
  _version?: number | null,
};

export type DeleteHcScheduleInput = {
  id: string,
  _version?: number | null,
};

export type CreateHcDataInput = {
  id?: string | null,
  device_id?: string | null,
  cost?: string | null,
  in_temp?: string | null,
  load?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type ModelHcDataConditionInput = {
  device_id?: ModelStringInput | null,
  cost?: ModelStringInput | null,
  in_temp?: ModelStringInput | null,
  load?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelHcDataConditionInput | null > | null,
  or?: Array< ModelHcDataConditionInput | null > | null,
  not?: ModelHcDataConditionInput | null,
};

export type HcData = {
  __typename: "HcData",
  id: string,
  device_id?: string | null,
  cost?: string | null,
  in_temp?: string | null,
  load?: string | null,
  status?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateHcDataInput = {
  id: string,
  device_id?: string | null,
  cost?: string | null,
  in_temp?: string | null,
  load?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type DeleteHcDataInput = {
  id: string,
  _version?: number | null,
};

export type CreateTestDataModelInput = {
  id?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type ModelTestDataModelConditionInput = {
  description?: ModelStringInput | null,
  and?: Array< ModelTestDataModelConditionInput | null > | null,
  or?: Array< ModelTestDataModelConditionInput | null > | null,
  not?: ModelTestDataModelConditionInput | null,
};

export type TestDataModel = {
  __typename: "TestDataModel",
  id: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTestDataModelInput = {
  id: string,
  description?: string | null,
  _version?: number | null,
};

export type DeleteTestDataModelInput = {
  id: string,
  _version?: number | null,
};

export type ModelSolarDataFilterInput = {
  id?: ModelIDInput | null,
  device_id?: ModelStringInput | null,
  inverter?: ModelStringInput | null,
  inverter_model?: ModelStringInput | null,
  pv_in?: ModelStringInput | null,
  pv_model?: ModelStringInput | null,
  pv_sys?: ModelStringInput | null,
  and?: Array< ModelSolarDataFilterInput | null > | null,
  or?: Array< ModelSolarDataFilterInput | null > | null,
  not?: ModelSolarDataFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSolarDataConnection = {
  __typename: "ModelSolarDataConnection",
  items:  Array<SolarData | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBatteryDataFilterInput = {
  id?: ModelIDInput | null,
  device_id?: ModelStringInput | null,
  battery_info?: ModelStringInput | null,
  charger_info?: ModelStringInput | null,
  charging?: ModelStringInput | null,
  cost?: ModelStringInput | null,
  desired_status?: ModelStringInput | null,
  flexibility?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelBatteryDataFilterInput | null > | null,
  or?: Array< ModelBatteryDataFilterInput | null > | null,
  not?: ModelBatteryDataFilterInput | null,
};

export type ModelBatteryDataConnection = {
  __typename: "ModelBatteryDataConnection",
  items:  Array<BatteryData | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEvScheduleFilterInput = {
  id?: ModelIDInput | null,
  device_id?: ModelStringInput | null,
  away?: ModelStringInput | null,
  home?: ModelStringInput | null,
  sleep?: ModelStringInput | null,
  vacation?: ModelStringInput | null,
  and?: Array< ModelEvScheduleFilterInput | null > | null,
  or?: Array< ModelEvScheduleFilterInput | null > | null,
  not?: ModelEvScheduleFilterInput | null,
};

export type ModelEvScheduleConnection = {
  __typename: "ModelEvScheduleConnection",
  items:  Array<EvSchedule | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelHcScheduleFilterInput = {
  id?: ModelIDInput | null,
  device_id?: ModelStringInput | null,
  away?: ModelStringInput | null,
  home?: ModelStringInput | null,
  sleep?: ModelStringInput | null,
  vacation?: ModelStringInput | null,
  and?: Array< ModelHcScheduleFilterInput | null > | null,
  or?: Array< ModelHcScheduleFilterInput | null > | null,
  not?: ModelHcScheduleFilterInput | null,
};

export type ModelHcScheduleConnection = {
  __typename: "ModelHcScheduleConnection",
  items:  Array<HcSchedule | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelHcDataFilterInput = {
  id?: ModelIDInput | null,
  device_id?: ModelStringInput | null,
  cost?: ModelStringInput | null,
  in_temp?: ModelStringInput | null,
  load?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelHcDataFilterInput | null > | null,
  or?: Array< ModelHcDataFilterInput | null > | null,
  not?: ModelHcDataFilterInput | null,
};

export type ModelHcDataConnection = {
  __typename: "ModelHcDataConnection",
  items:  Array<HcData | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTestDataModelFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTestDataModelFilterInput | null > | null,
  or?: Array< ModelTestDataModelFilterInput | null > | null,
  not?: ModelTestDataModelFilterInput | null,
};

export type ModelTestDataModelConnection = {
  __typename: "ModelTestDataModelConnection",
  items:  Array<TestDataModel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionSolarDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  device_id?: ModelSubscriptionStringInput | null,
  inverter?: ModelSubscriptionStringInput | null,
  inverter_model?: ModelSubscriptionStringInput | null,
  pv_in?: ModelSubscriptionStringInput | null,
  pv_model?: ModelSubscriptionStringInput | null,
  pv_sys?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSolarDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionSolarDataFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBatteryDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  device_id?: ModelSubscriptionStringInput | null,
  battery_info?: ModelSubscriptionStringInput | null,
  charger_info?: ModelSubscriptionStringInput | null,
  charging?: ModelSubscriptionStringInput | null,
  cost?: ModelSubscriptionStringInput | null,
  desired_status?: ModelSubscriptionStringInput | null,
  flexibility?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBatteryDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionBatteryDataFilterInput | null > | null,
};

export type ModelSubscriptionEvScheduleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  device_id?: ModelSubscriptionStringInput | null,
  away?: ModelSubscriptionStringInput | null,
  home?: ModelSubscriptionStringInput | null,
  sleep?: ModelSubscriptionStringInput | null,
  vacation?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEvScheduleFilterInput | null > | null,
  or?: Array< ModelSubscriptionEvScheduleFilterInput | null > | null,
};

export type ModelSubscriptionHcScheduleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  device_id?: ModelSubscriptionStringInput | null,
  away?: ModelSubscriptionStringInput | null,
  home?: ModelSubscriptionStringInput | null,
  sleep?: ModelSubscriptionStringInput | null,
  vacation?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHcScheduleFilterInput | null > | null,
  or?: Array< ModelSubscriptionHcScheduleFilterInput | null > | null,
};

export type ModelSubscriptionHcDataFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  device_id?: ModelSubscriptionStringInput | null,
  cost?: ModelSubscriptionStringInput | null,
  in_temp?: ModelSubscriptionStringInput | null,
  load?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHcDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionHcDataFilterInput | null > | null,
};

export type ModelSubscriptionTestDataModelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTestDataModelFilterInput | null > | null,
  or?: Array< ModelSubscriptionTestDataModelFilterInput | null > | null,
};

export type CreateSolarDataMutationVariables = {
  input: CreateSolarDataInput,
  condition?: ModelSolarDataConditionInput | null,
};

export type CreateSolarDataMutation = {
  createSolarData?:  {
    __typename: "SolarData",
    id: string,
    device_id?: string | null,
    inverter?: string | null,
    inverter_model?: string | null,
    pv_in?: string | null,
    pv_model?: string | null,
    pv_sys?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateSolarDataMutationVariables = {
  input: UpdateSolarDataInput,
  condition?: ModelSolarDataConditionInput | null,
};

export type UpdateSolarDataMutation = {
  updateSolarData?:  {
    __typename: "SolarData",
    id: string,
    device_id?: string | null,
    inverter?: string | null,
    inverter_model?: string | null,
    pv_in?: string | null,
    pv_model?: string | null,
    pv_sys?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteSolarDataMutationVariables = {
  input: DeleteSolarDataInput,
  condition?: ModelSolarDataConditionInput | null,
};

export type DeleteSolarDataMutation = {
  deleteSolarData?:  {
    __typename: "SolarData",
    id: string,
    device_id?: string | null,
    inverter?: string | null,
    inverter_model?: string | null,
    pv_in?: string | null,
    pv_model?: string | null,
    pv_sys?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBatteryDataMutationVariables = {
  input: CreateBatteryDataInput,
  condition?: ModelBatteryDataConditionInput | null,
};

export type CreateBatteryDataMutation = {
  createBatteryData?:  {
    __typename: "BatteryData",
    id: string,
    device_id?: string | null,
    battery_info?: string | null,
    charger_info?: string | null,
    charging?: string | null,
    cost?: string | null,
    desired_status?: string | null,
    flexibility?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBatteryDataMutationVariables = {
  input: UpdateBatteryDataInput,
  condition?: ModelBatteryDataConditionInput | null,
};

export type UpdateBatteryDataMutation = {
  updateBatteryData?:  {
    __typename: "BatteryData",
    id: string,
    device_id?: string | null,
    battery_info?: string | null,
    charger_info?: string | null,
    charging?: string | null,
    cost?: string | null,
    desired_status?: string | null,
    flexibility?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBatteryDataMutationVariables = {
  input: DeleteBatteryDataInput,
  condition?: ModelBatteryDataConditionInput | null,
};

export type DeleteBatteryDataMutation = {
  deleteBatteryData?:  {
    __typename: "BatteryData",
    id: string,
    device_id?: string | null,
    battery_info?: string | null,
    charger_info?: string | null,
    charging?: string | null,
    cost?: string | null,
    desired_status?: string | null,
    flexibility?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEvScheduleMutationVariables = {
  input: CreateEvScheduleInput,
  condition?: ModelEvScheduleConditionInput | null,
};

export type CreateEvScheduleMutation = {
  createEvSchedule?:  {
    __typename: "EvSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEvScheduleMutationVariables = {
  input: UpdateEvScheduleInput,
  condition?: ModelEvScheduleConditionInput | null,
};

export type UpdateEvScheduleMutation = {
  updateEvSchedule?:  {
    __typename: "EvSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEvScheduleMutationVariables = {
  input: DeleteEvScheduleInput,
  condition?: ModelEvScheduleConditionInput | null,
};

export type DeleteEvScheduleMutation = {
  deleteEvSchedule?:  {
    __typename: "EvSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateHcScheduleMutationVariables = {
  input: CreateHcScheduleInput,
  condition?: ModelHcScheduleConditionInput | null,
};

export type CreateHcScheduleMutation = {
  createHcSchedule?:  {
    __typename: "HcSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateHcScheduleMutationVariables = {
  input: UpdateHcScheduleInput,
  condition?: ModelHcScheduleConditionInput | null,
};

export type UpdateHcScheduleMutation = {
  updateHcSchedule?:  {
    __typename: "HcSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteHcScheduleMutationVariables = {
  input: DeleteHcScheduleInput,
  condition?: ModelHcScheduleConditionInput | null,
};

export type DeleteHcScheduleMutation = {
  deleteHcSchedule?:  {
    __typename: "HcSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateHcDataMutationVariables = {
  input: CreateHcDataInput,
  condition?: ModelHcDataConditionInput | null,
};

export type CreateHcDataMutation = {
  createHcData?:  {
    __typename: "HcData",
    id: string,
    device_id?: string | null,
    cost?: string | null,
    in_temp?: string | null,
    load?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateHcDataMutationVariables = {
  input: UpdateHcDataInput,
  condition?: ModelHcDataConditionInput | null,
};

export type UpdateHcDataMutation = {
  updateHcData?:  {
    __typename: "HcData",
    id: string,
    device_id?: string | null,
    cost?: string | null,
    in_temp?: string | null,
    load?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteHcDataMutationVariables = {
  input: DeleteHcDataInput,
  condition?: ModelHcDataConditionInput | null,
};

export type DeleteHcDataMutation = {
  deleteHcData?:  {
    __typename: "HcData",
    id: string,
    device_id?: string | null,
    cost?: string | null,
    in_temp?: string | null,
    load?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTestDataModelMutationVariables = {
  input: CreateTestDataModelInput,
  condition?: ModelTestDataModelConditionInput | null,
};

export type CreateTestDataModelMutation = {
  createTestDataModel?:  {
    __typename: "TestDataModel",
    id: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTestDataModelMutationVariables = {
  input: UpdateTestDataModelInput,
  condition?: ModelTestDataModelConditionInput | null,
};

export type UpdateTestDataModelMutation = {
  updateTestDataModel?:  {
    __typename: "TestDataModel",
    id: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTestDataModelMutationVariables = {
  input: DeleteTestDataModelInput,
  condition?: ModelTestDataModelConditionInput | null,
};

export type DeleteTestDataModelMutation = {
  deleteTestDataModel?:  {
    __typename: "TestDataModel",
    id: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetSolarDataQueryVariables = {
  id: string,
};

export type GetSolarDataQuery = {
  getSolarData?:  {
    __typename: "SolarData",
    id: string,
    device_id?: string | null,
    inverter?: string | null,
    inverter_model?: string | null,
    pv_in?: string | null,
    pv_model?: string | null,
    pv_sys?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListSolarDataQueryVariables = {
  filter?: ModelSolarDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSolarDataQuery = {
  listSolarData?:  {
    __typename: "ModelSolarDataConnection",
    items:  Array< {
      __typename: "SolarData",
      id: string,
      device_id?: string | null,
      inverter?: string | null,
      inverter_model?: string | null,
      pv_in?: string | null,
      pv_model?: string | null,
      pv_sys?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSolarDataQueryVariables = {
  filter?: ModelSolarDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSolarDataQuery = {
  syncSolarData?:  {
    __typename: "ModelSolarDataConnection",
    items:  Array< {
      __typename: "SolarData",
      id: string,
      device_id?: string | null,
      inverter?: string | null,
      inverter_model?: string | null,
      pv_in?: string | null,
      pv_model?: string | null,
      pv_sys?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBatteryDataQueryVariables = {
  id: string,
};

export type GetBatteryDataQuery = {
  getBatteryData?:  {
    __typename: "BatteryData",
    id: string,
    device_id?: string | null,
    battery_info?: string | null,
    charger_info?: string | null,
    charging?: string | null,
    cost?: string | null,
    desired_status?: string | null,
    flexibility?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBatteryDataQueryVariables = {
  filter?: ModelBatteryDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBatteryDataQuery = {
  listBatteryData?:  {
    __typename: "ModelBatteryDataConnection",
    items:  Array< {
      __typename: "BatteryData",
      id: string,
      device_id?: string | null,
      battery_info?: string | null,
      charger_info?: string | null,
      charging?: string | null,
      cost?: string | null,
      desired_status?: string | null,
      flexibility?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBatteryDataQueryVariables = {
  filter?: ModelBatteryDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBatteryDataQuery = {
  syncBatteryData?:  {
    __typename: "ModelBatteryDataConnection",
    items:  Array< {
      __typename: "BatteryData",
      id: string,
      device_id?: string | null,
      battery_info?: string | null,
      charger_info?: string | null,
      charging?: string | null,
      cost?: string | null,
      desired_status?: string | null,
      flexibility?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEvScheduleQueryVariables = {
  id: string,
};

export type GetEvScheduleQuery = {
  getEvSchedule?:  {
    __typename: "EvSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEvSchedulesQueryVariables = {
  filter?: ModelEvScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEvSchedulesQuery = {
  listEvSchedules?:  {
    __typename: "ModelEvScheduleConnection",
    items:  Array< {
      __typename: "EvSchedule",
      id: string,
      device_id?: string | null,
      away?: string | null,
      home?: string | null,
      sleep?: string | null,
      vacation?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEvSchedulesQueryVariables = {
  filter?: ModelEvScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEvSchedulesQuery = {
  syncEvSchedules?:  {
    __typename: "ModelEvScheduleConnection",
    items:  Array< {
      __typename: "EvSchedule",
      id: string,
      device_id?: string | null,
      away?: string | null,
      home?: string | null,
      sleep?: string | null,
      vacation?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetHcScheduleQueryVariables = {
  id: string,
};

export type GetHcScheduleQuery = {
  getHcSchedule?:  {
    __typename: "HcSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListHcSchedulesQueryVariables = {
  filter?: ModelHcScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHcSchedulesQuery = {
  listHcSchedules?:  {
    __typename: "ModelHcScheduleConnection",
    items:  Array< {
      __typename: "HcSchedule",
      id: string,
      device_id?: string | null,
      away?: string | null,
      home?: string | null,
      sleep?: string | null,
      vacation?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncHcSchedulesQueryVariables = {
  filter?: ModelHcScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHcSchedulesQuery = {
  syncHcSchedules?:  {
    __typename: "ModelHcScheduleConnection",
    items:  Array< {
      __typename: "HcSchedule",
      id: string,
      device_id?: string | null,
      away?: string | null,
      home?: string | null,
      sleep?: string | null,
      vacation?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetHcDataQueryVariables = {
  id: string,
};

export type GetHcDataQuery = {
  getHcData?:  {
    __typename: "HcData",
    id: string,
    device_id?: string | null,
    cost?: string | null,
    in_temp?: string | null,
    load?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListHcDataQueryVariables = {
  filter?: ModelHcDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHcDataQuery = {
  listHcData?:  {
    __typename: "ModelHcDataConnection",
    items:  Array< {
      __typename: "HcData",
      id: string,
      device_id?: string | null,
      cost?: string | null,
      in_temp?: string | null,
      load?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncHcDataQueryVariables = {
  filter?: ModelHcDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHcDataQuery = {
  syncHcData?:  {
    __typename: "ModelHcDataConnection",
    items:  Array< {
      __typename: "HcData",
      id: string,
      device_id?: string | null,
      cost?: string | null,
      in_temp?: string | null,
      load?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTestDataModelQueryVariables = {
  id: string,
};

export type GetTestDataModelQuery = {
  getTestDataModel?:  {
    __typename: "TestDataModel",
    id: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTestDataModelsQueryVariables = {
  filter?: ModelTestDataModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTestDataModelsQuery = {
  listTestDataModels?:  {
    __typename: "ModelTestDataModelConnection",
    items:  Array< {
      __typename: "TestDataModel",
      id: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTestDataModelsQueryVariables = {
  filter?: ModelTestDataModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTestDataModelsQuery = {
  syncTestDataModels?:  {
    __typename: "ModelTestDataModelConnection",
    items:  Array< {
      __typename: "TestDataModel",
      id: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateSolarDataSubscriptionVariables = {
  filter?: ModelSubscriptionSolarDataFilterInput | null,
};

export type OnCreateSolarDataSubscription = {
  onCreateSolarData?:  {
    __typename: "SolarData",
    id: string,
    device_id?: string | null,
    inverter?: string | null,
    inverter_model?: string | null,
    pv_in?: string | null,
    pv_model?: string | null,
    pv_sys?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateSolarDataSubscriptionVariables = {
  filter?: ModelSubscriptionSolarDataFilterInput | null,
};

export type OnUpdateSolarDataSubscription = {
  onUpdateSolarData?:  {
    __typename: "SolarData",
    id: string,
    device_id?: string | null,
    inverter?: string | null,
    inverter_model?: string | null,
    pv_in?: string | null,
    pv_model?: string | null,
    pv_sys?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteSolarDataSubscriptionVariables = {
  filter?: ModelSubscriptionSolarDataFilterInput | null,
};

export type OnDeleteSolarDataSubscription = {
  onDeleteSolarData?:  {
    __typename: "SolarData",
    id: string,
    device_id?: string | null,
    inverter?: string | null,
    inverter_model?: string | null,
    pv_in?: string | null,
    pv_model?: string | null,
    pv_sys?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBatteryDataSubscriptionVariables = {
  filter?: ModelSubscriptionBatteryDataFilterInput | null,
};

export type OnCreateBatteryDataSubscription = {
  onCreateBatteryData?:  {
    __typename: "BatteryData",
    id: string,
    device_id?: string | null,
    battery_info?: string | null,
    charger_info?: string | null,
    charging?: string | null,
    cost?: string | null,
    desired_status?: string | null,
    flexibility?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBatteryDataSubscriptionVariables = {
  filter?: ModelSubscriptionBatteryDataFilterInput | null,
};

export type OnUpdateBatteryDataSubscription = {
  onUpdateBatteryData?:  {
    __typename: "BatteryData",
    id: string,
    device_id?: string | null,
    battery_info?: string | null,
    charger_info?: string | null,
    charging?: string | null,
    cost?: string | null,
    desired_status?: string | null,
    flexibility?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBatteryDataSubscriptionVariables = {
  filter?: ModelSubscriptionBatteryDataFilterInput | null,
};

export type OnDeleteBatteryDataSubscription = {
  onDeleteBatteryData?:  {
    __typename: "BatteryData",
    id: string,
    device_id?: string | null,
    battery_info?: string | null,
    charger_info?: string | null,
    charging?: string | null,
    cost?: string | null,
    desired_status?: string | null,
    flexibility?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEvScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionEvScheduleFilterInput | null,
};

export type OnCreateEvScheduleSubscription = {
  onCreateEvSchedule?:  {
    __typename: "EvSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEvScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionEvScheduleFilterInput | null,
};

export type OnUpdateEvScheduleSubscription = {
  onUpdateEvSchedule?:  {
    __typename: "EvSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEvScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionEvScheduleFilterInput | null,
};

export type OnDeleteEvScheduleSubscription = {
  onDeleteEvSchedule?:  {
    __typename: "EvSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateHcScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionHcScheduleFilterInput | null,
};

export type OnCreateHcScheduleSubscription = {
  onCreateHcSchedule?:  {
    __typename: "HcSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateHcScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionHcScheduleFilterInput | null,
};

export type OnUpdateHcScheduleSubscription = {
  onUpdateHcSchedule?:  {
    __typename: "HcSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteHcScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionHcScheduleFilterInput | null,
};

export type OnDeleteHcScheduleSubscription = {
  onDeleteHcSchedule?:  {
    __typename: "HcSchedule",
    id: string,
    device_id?: string | null,
    away?: string | null,
    home?: string | null,
    sleep?: string | null,
    vacation?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateHcDataSubscriptionVariables = {
  filter?: ModelSubscriptionHcDataFilterInput | null,
};

export type OnCreateHcDataSubscription = {
  onCreateHcData?:  {
    __typename: "HcData",
    id: string,
    device_id?: string | null,
    cost?: string | null,
    in_temp?: string | null,
    load?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateHcDataSubscriptionVariables = {
  filter?: ModelSubscriptionHcDataFilterInput | null,
};

export type OnUpdateHcDataSubscription = {
  onUpdateHcData?:  {
    __typename: "HcData",
    id: string,
    device_id?: string | null,
    cost?: string | null,
    in_temp?: string | null,
    load?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteHcDataSubscriptionVariables = {
  filter?: ModelSubscriptionHcDataFilterInput | null,
};

export type OnDeleteHcDataSubscription = {
  onDeleteHcData?:  {
    __typename: "HcData",
    id: string,
    device_id?: string | null,
    cost?: string | null,
    in_temp?: string | null,
    load?: string | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTestDataModelSubscriptionVariables = {
  filter?: ModelSubscriptionTestDataModelFilterInput | null,
};

export type OnCreateTestDataModelSubscription = {
  onCreateTestDataModel?:  {
    __typename: "TestDataModel",
    id: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTestDataModelSubscriptionVariables = {
  filter?: ModelSubscriptionTestDataModelFilterInput | null,
};

export type OnUpdateTestDataModelSubscription = {
  onUpdateTestDataModel?:  {
    __typename: "TestDataModel",
    id: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTestDataModelSubscriptionVariables = {
  filter?: ModelSubscriptionTestDataModelFilterInput | null,
};

export type OnDeleteTestDataModelSubscription = {
  onDeleteTestDataModel?:  {
    __typename: "TestDataModel",
    id: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
