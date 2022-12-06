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
export declare type BatteryDataCreateFormInputValues = {
    device_id?: string;
    state_of_charge?: string;
    charging?: string;
    cost?: string;
    desired_state_of_charge?: string;
    flexibility?: string;
    charger_name?: string;
    model?: string;
    capacity?: string;
    health?: string;
};
export declare type BatteryDataCreateFormValidationValues = {
    device_id?: ValidationFunction<string>;
    state_of_charge?: ValidationFunction<string>;
    charging?: ValidationFunction<string>;
    cost?: ValidationFunction<string>;
    desired_state_of_charge?: ValidationFunction<string>;
    flexibility?: ValidationFunction<string>;
    charger_name?: ValidationFunction<string>;
    model?: ValidationFunction<string>;
    capacity?: ValidationFunction<string>;
    health?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BatteryDataCreateFormOverridesProps = {
    BatteryDataCreateFormGrid?: FormProps<GridProps>;
    device_id?: FormProps<TextFieldProps>;
    state_of_charge?: FormProps<TextFieldProps>;
    charging?: FormProps<TextFieldProps>;
    cost?: FormProps<TextFieldProps>;
    desired_state_of_charge?: FormProps<TextFieldProps>;
    flexibility?: FormProps<TextFieldProps>;
    charger_name?: FormProps<TextFieldProps>;
    model?: FormProps<TextFieldProps>;
    capacity?: FormProps<TextFieldProps>;
    health?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BatteryDataCreateFormProps = React.PropsWithChildren<{
    overrides?: BatteryDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BatteryDataCreateFormInputValues) => BatteryDataCreateFormInputValues;
    onSuccess?: (fields: BatteryDataCreateFormInputValues) => void;
    onError?: (fields: BatteryDataCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BatteryDataCreateFormInputValues) => BatteryDataCreateFormInputValues;
    onValidate?: BatteryDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function BatteryDataCreateForm(props: BatteryDataCreateFormProps): React.ReactElement;
