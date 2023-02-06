/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { HcData } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HcDataUpdateFormInputValues = {
    device_id?: string;
    cost?: string;
    in_temp?: string;
    load?: string;
    status?: string;
};
export declare type HcDataUpdateFormValidationValues = {
    device_id?: ValidationFunction<string>;
    cost?: ValidationFunction<string>;
    in_temp?: ValidationFunction<string>;
    load?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HcDataUpdateFormOverridesProps = {
    HcDataUpdateFormGrid?: FormProps<GridProps>;
    device_id?: FormProps<TextFieldProps>;
    cost?: FormProps<TextFieldProps>;
    in_temp?: FormProps<TextFieldProps>;
    load?: FormProps<TextFieldProps>;
    status?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HcDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: HcDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    hcData?: HcData;
    onSubmit?: (fields: HcDataUpdateFormInputValues) => HcDataUpdateFormInputValues;
    onSuccess?: (fields: HcDataUpdateFormInputValues) => void;
    onError?: (fields: HcDataUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HcDataUpdateFormInputValues) => HcDataUpdateFormInputValues;
    onValidate?: HcDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HcDataUpdateForm(props: HcDataUpdateFormProps): React.ReactElement;
