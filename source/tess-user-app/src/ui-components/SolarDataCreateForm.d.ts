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
export declare type SolarDataCreateFormInputValues = {
    device_id?: string;
    inverter?: string;
    inverter_model?: string;
    pv_in?: string;
    pv_model?: string;
    pv_sys?: string;
};
export declare type SolarDataCreateFormValidationValues = {
    device_id?: ValidationFunction<string>;
    inverter?: ValidationFunction<string>;
    inverter_model?: ValidationFunction<string>;
    pv_in?: ValidationFunction<string>;
    pv_model?: ValidationFunction<string>;
    pv_sys?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SolarDataCreateFormOverridesProps = {
    SolarDataCreateFormGrid?: FormProps<GridProps>;
    device_id?: FormProps<TextFieldProps>;
    inverter?: FormProps<TextFieldProps>;
    inverter_model?: FormProps<TextFieldProps>;
    pv_in?: FormProps<TextFieldProps>;
    pv_model?: FormProps<TextFieldProps>;
    pv_sys?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SolarDataCreateFormProps = React.PropsWithChildren<{
    overrides?: SolarDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SolarDataCreateFormInputValues) => SolarDataCreateFormInputValues;
    onSuccess?: (fields: SolarDataCreateFormInputValues) => void;
    onError?: (fields: SolarDataCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SolarDataCreateFormInputValues) => SolarDataCreateFormInputValues;
    onValidate?: SolarDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function SolarDataCreateForm(props: SolarDataCreateFormProps): React.ReactElement;
