/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TestDataModel } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestDataModelUpdateFormInputValues = {
    description?: string;
};
export declare type TestDataModelUpdateFormValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestDataModelUpdateFormOverridesProps = {
    TestDataModelUpdateFormGrid?: FormProps<GridProps>;
    description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestDataModelUpdateFormProps = React.PropsWithChildren<{
    overrides?: TestDataModelUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    testDataModel?: TestDataModel;
    onSubmit?: (fields: TestDataModelUpdateFormInputValues) => TestDataModelUpdateFormInputValues;
    onSuccess?: (fields: TestDataModelUpdateFormInputValues) => void;
    onError?: (fields: TestDataModelUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TestDataModelUpdateFormInputValues) => TestDataModelUpdateFormInputValues;
    onValidate?: TestDataModelUpdateFormValidationValues;
}>;
export default function TestDataModelUpdateForm(props: TestDataModelUpdateFormProps): React.ReactElement;
