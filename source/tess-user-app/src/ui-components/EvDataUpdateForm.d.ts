/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EvData } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EvDataUpdateFormInputValues = {
    device_id?: string;
    state_of_charge?: string;
    charging?: string;
    cost?: number;
    current_limit?: number;
    load?: string;
    charger_name?: string;
    model?: string;
    manufacturer?: string;
    input_voltage?: string;
    health?: string;
};
export declare type EvDataUpdateFormValidationValues = {
    device_id?: ValidationFunction<string>;
    state_of_charge?: ValidationFunction<string>;
    charging?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
    current_limit?: ValidationFunction<number>;
    load?: ValidationFunction<string>;
    charger_name?: ValidationFunction<string>;
    model?: ValidationFunction<string>;
    manufacturer?: ValidationFunction<string>;
    input_voltage?: ValidationFunction<string>;
    health?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EvDataUpdateFormOverridesProps = {
    EvDataUpdateFormGrid?: FormProps<GridProps>;
    device_id?: FormProps<TextFieldProps>;
    state_of_charge?: FormProps<TextFieldProps>;
    charging?: FormProps<TextFieldProps>;
    cost?: FormProps<TextFieldProps>;
    current_limit?: FormProps<TextFieldProps>;
    load?: FormProps<TextFieldProps>;
    charger_name?: FormProps<TextFieldProps>;
    model?: FormProps<TextFieldProps>;
    manufacturer?: FormProps<TextFieldProps>;
    input_voltage?: FormProps<TextFieldProps>;
    health?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EvDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: EvDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    evData?: EvData;
    onSubmit?: (fields: EvDataUpdateFormInputValues) => EvDataUpdateFormInputValues;
    onSuccess?: (fields: EvDataUpdateFormInputValues) => void;
    onError?: (fields: EvDataUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: EvDataUpdateFormInputValues) => EvDataUpdateFormInputValues;
    onValidate?: EvDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EvDataUpdateForm(props: EvDataUpdateFormProps): React.ReactElement;
