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
export declare type HcScheduleCreateFormInputValues = {
    device_id?: string;
    away?: string;
    home?: string;
    sleep?: string;
    vacation?: string;
};
export declare type HcScheduleCreateFormValidationValues = {
    device_id?: ValidationFunction<string>;
    away?: ValidationFunction<string>;
    home?: ValidationFunction<string>;
    sleep?: ValidationFunction<string>;
    vacation?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HcScheduleCreateFormOverridesProps = {
    HcScheduleCreateFormGrid?: FormProps<GridProps>;
    device_id?: FormProps<TextFieldProps>;
    away?: FormProps<TextFieldProps>;
    home?: FormProps<TextFieldProps>;
    sleep?: FormProps<TextFieldProps>;
    vacation?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HcScheduleCreateFormProps = React.PropsWithChildren<{
    overrides?: HcScheduleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HcScheduleCreateFormInputValues) => HcScheduleCreateFormInputValues;
    onSuccess?: (fields: HcScheduleCreateFormInputValues) => void;
    onError?: (fields: HcScheduleCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HcScheduleCreateFormInputValues) => HcScheduleCreateFormInputValues;
    onValidate?: HcScheduleCreateFormValidationValues;
} & React.CSSProperties>;
export default function HcScheduleCreateForm(props: HcScheduleCreateFormProps): React.ReactElement;
