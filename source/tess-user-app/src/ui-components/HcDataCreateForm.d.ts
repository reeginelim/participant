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
export declare type HcDataCreateFormInputValues = {
    device_id?: string;
    cost?: string;
    in_temp?: string;
    load?: string;
    status?: string;
};
export declare type HcDataCreateFormValidationValues = {
    device_id?: ValidationFunction<string>;
    cost?: ValidationFunction<string>;
    in_temp?: ValidationFunction<string>;
    load?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HcDataCreateFormOverridesProps = {
    HcDataCreateFormGrid?: FormProps<GridProps>;
    device_id?: FormProps<TextFieldProps>;
    cost?: FormProps<TextFieldProps>;
    in_temp?: FormProps<TextFieldProps>;
    load?: FormProps<TextFieldProps>;
    status?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HcDataCreateFormProps = React.PropsWithChildren<{
    overrides?: HcDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HcDataCreateFormInputValues) => HcDataCreateFormInputValues;
    onSuccess?: (fields: HcDataCreateFormInputValues) => void;
    onError?: (fields: HcDataCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HcDataCreateFormInputValues) => HcDataCreateFormInputValues;
    onValidate?: HcDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function HcDataCreateForm(props: HcDataCreateFormProps): React.ReactElement;
