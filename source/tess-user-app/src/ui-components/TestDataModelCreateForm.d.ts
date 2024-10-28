/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TestDataModelCreateFormInputValues = {
    description?: string;
};
export declare type TestDataModelCreateFormValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestDataModelCreateFormOverridesProps = {
    TestDataModelCreateFormGrid?: FormProps<GridProps>;
    description?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TestDataModelCreateFormProps = React.PropsWithChildren<{
    overrides?: TestDataModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TestDataModelCreateFormInputValues) => TestDataModelCreateFormInputValues;
    onSuccess?: (fields: TestDataModelCreateFormInputValues) => void;
    onError?: (fields: TestDataModelCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: TestDataModelCreateFormInputValues) => TestDataModelCreateFormInputValues;
    onValidate?: TestDataModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function TestDataModelCreateForm(props: TestDataModelCreateFormProps): React.ReactElement;
