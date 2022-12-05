import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type TestDataModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
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