import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ScheduleType {
  HOME = "HOME",
  AWAY = "AWAY",
  SLEEP = "SLEEP",
  VACATION = "VACATION"
}

type EagerEvSchedFields = {
  readonly comfort?: number | null;
  readonly state_of_charge?: number | null;
  readonly desired_time_to_leave?: number | null;
  readonly time_to_finish_charge?: number | null;
  readonly health?: number | null;
  readonly type?: ScheduleType | keyof typeof ScheduleType | null;
}

type LazyEvSchedFields = {
  readonly comfort?: number | null;
  readonly state_of_charge?: number | null;
  readonly desired_time_to_leave?: number | null;
  readonly time_to_finish_charge?: number | null;
  readonly health?: number | null;
  readonly type?: ScheduleType | keyof typeof ScheduleType | null;
}

export declare type EvSchedFields = LazyLoading extends LazyLoadingDisabled ? EagerEvSchedFields : LazyEvSchedFields

export declare const EvSchedFields: (new (init: ModelInit<EvSchedFields>) => EvSchedFields)

type EagerHcSchedFields = {
  readonly comfort?: number | null;
  readonly min_temp?: number | null;
  readonly max_temp?: number | null;
  readonly start_time?: number | null;
  readonly end_time?: number | null;
  readonly type?: ScheduleType | keyof typeof ScheduleType | null;
}

type LazyHcSchedFields = {
  readonly comfort?: number | null;
  readonly min_temp?: number | null;
  readonly max_temp?: number | null;
  readonly start_time?: number | null;
  readonly end_time?: number | null;
  readonly type?: ScheduleType | keyof typeof ScheduleType | null;
}

export declare type HcSchedFields = LazyLoading extends LazyLoadingDisabled ? EagerHcSchedFields : LazyHcSchedFields

export declare const HcSchedFields: (new (init: ModelInit<HcSchedFields>) => HcSchedFields)

type EvDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SolarDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BatteryDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EvScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HcScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HcDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestDataModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerEvData = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly state_of_charge?: string | null;
  readonly charging?: string | null;
  readonly cost?: number | null;
  readonly current_limit?: number | null;
  readonly load?: string | null;
  readonly charger_name?: string | null;
  readonly model?: string | null;
  readonly manufacturer?: string | null;
  readonly input_voltage?: string | null;
  readonly health?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvData = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly state_of_charge?: string | null;
  readonly charging?: string | null;
  readonly cost?: number | null;
  readonly current_limit?: number | null;
  readonly load?: string | null;
  readonly charger_name?: string | null;
  readonly model?: string | null;
  readonly manufacturer?: string | null;
  readonly input_voltage?: string | null;
  readonly health?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvData = LazyLoading extends LazyLoadingDisabled ? EagerEvData : LazyEvData

export declare const EvData: (new (init: ModelInit<EvData, EvDataMetaData>) => EvData) & {
  copyOf(source: EvData, mutator: (draft: MutableModel<EvData, EvDataMetaData>) => MutableModel<EvData, EvDataMetaData> | void): EvData;
}

type EagerSolarData = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly inverter?: string | null;
  readonly inverter_model?: string | null;
  readonly pv_in?: string | null;
  readonly pv_model?: string | null;
  readonly pv_sys?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySolarData = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly inverter?: string | null;
  readonly inverter_model?: string | null;
  readonly pv_in?: string | null;
  readonly pv_model?: string | null;
  readonly pv_sys?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SolarData = LazyLoading extends LazyLoadingDisabled ? EagerSolarData : LazySolarData

export declare const SolarData: (new (init: ModelInit<SolarData, SolarDataMetaData>) => SolarData) & {
  copyOf(source: SolarData, mutator: (draft: MutableModel<SolarData, SolarDataMetaData>) => MutableModel<SolarData, SolarDataMetaData> | void): SolarData;
}

type EagerBatteryData = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly state_of_charge?: string | null;
  readonly charging?: string | null;
  readonly cost?: string | null;
  readonly desired_state_of_charge?: string | null;
  readonly flexibility?: string | null;
  readonly charger_name?: string | null;
  readonly model?: string | null;
  readonly capacity?: string | null;
  readonly health?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBatteryData = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly state_of_charge?: string | null;
  readonly charging?: string | null;
  readonly cost?: string | null;
  readonly desired_state_of_charge?: string | null;
  readonly flexibility?: string | null;
  readonly charger_name?: string | null;
  readonly model?: string | null;
  readonly capacity?: string | null;
  readonly health?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BatteryData = LazyLoading extends LazyLoadingDisabled ? EagerBatteryData : LazyBatteryData

export declare const BatteryData: (new (init: ModelInit<BatteryData, BatteryDataMetaData>) => BatteryData) & {
  copyOf(source: BatteryData, mutator: (draft: MutableModel<BatteryData, BatteryDataMetaData>) => MutableModel<BatteryData, BatteryDataMetaData> | void): BatteryData;
}

type EagerEvSchedule = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly schedule?: EvSchedFields | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvSchedule = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly schedule?: EvSchedFields | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvSchedule = LazyLoading extends LazyLoadingDisabled ? EagerEvSchedule : LazyEvSchedule

export declare const EvSchedule: (new (init: ModelInit<EvSchedule, EvScheduleMetaData>) => EvSchedule) & {
  copyOf(source: EvSchedule, mutator: (draft: MutableModel<EvSchedule, EvScheduleMetaData>) => MutableModel<EvSchedule, EvScheduleMetaData> | void): EvSchedule;
}

type EagerHcSchedule = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly schedule?: HcSchedFields | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHcSchedule = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly schedule?: HcSchedFields | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HcSchedule = LazyLoading extends LazyLoadingDisabled ? EagerHcSchedule : LazyHcSchedule

export declare const HcSchedule: (new (init: ModelInit<HcSchedule, HcScheduleMetaData>) => HcSchedule) & {
  copyOf(source: HcSchedule, mutator: (draft: MutableModel<HcSchedule, HcScheduleMetaData>) => MutableModel<HcSchedule, HcScheduleMetaData> | void): HcSchedule;
}

type EagerHcData = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly cost?: string | null;
  readonly in_temp?: string | null;
  readonly load?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHcData = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly cost?: string | null;
  readonly in_temp?: string | null;
  readonly load?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HcData = LazyLoading extends LazyLoadingDisabled ? EagerHcData : LazyHcData

export declare const HcData: (new (init: ModelInit<HcData, HcDataMetaData>) => HcData) & {
  copyOf(source: HcData, mutator: (draft: MutableModel<HcData, HcDataMetaData>) => MutableModel<HcData, HcDataMetaData> | void): HcData;
}

type EagerTestDataModel = {
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestDataModel = {
  readonly id: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestDataModel = LazyLoading extends LazyLoadingDisabled ? EagerTestDataModel : LazyTestDataModel

export declare const TestDataModel: (new (init: ModelInit<TestDataModel, TestDataModelMetaData>) => TestDataModel) & {
  copyOf(source: TestDataModel, mutator: (draft: MutableModel<TestDataModel, TestDataModelMetaData>) => MutableModel<TestDataModel, TestDataModelMetaData> | void): TestDataModel;
}