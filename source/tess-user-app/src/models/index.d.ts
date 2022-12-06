import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

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
  readonly battery_info?: string | null;
  readonly charger_info?: string | null;
  readonly charging?: string | null;
  readonly cost?: string | null;
  readonly desired_status?: string | null;
  readonly flexibility?: string | null;
  readonly status?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBatteryData = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly battery_info?: string | null;
  readonly charger_info?: string | null;
  readonly charging?: string | null;
  readonly cost?: string | null;
  readonly desired_status?: string | null;
  readonly flexibility?: string | null;
  readonly status?: string | null;
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
  readonly away?: string | null;
  readonly home?: string | null;
  readonly sleep?: string | null;
  readonly vacation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvSchedule = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly away?: string | null;
  readonly home?: string | null;
  readonly sleep?: string | null;
  readonly vacation?: string | null;
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
  readonly away?: string | null;
  readonly home?: string | null;
  readonly sleep?: string | null;
  readonly vacation?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHcSchedule = {
  readonly id: string;
  readonly device_id?: string | null;
  readonly away?: string | null;
  readonly home?: string | null;
  readonly sleep?: string | null;
  readonly vacation?: string | null;
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