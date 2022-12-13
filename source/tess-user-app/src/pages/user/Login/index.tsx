import { Alert, message } from 'antd';
import React, { useState } from 'react';
import { useIntl, history, useModel } from 'umi';
import { login } from '@/services/ant-design-pro/api';
import {
  Authenticator,
  useTheme,
  View,
  Heading,
  useAuthenticator,
  Image,
  Text,
  Button,
} from '@aws-amplify/ui-react';
require('@aws-amplify/ui-react/styles.css'); // TODO: MFSU warnings.
const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');

  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      await setInitialState((s) => ({
        ...s,
        currentUser: userInfo,
      }));
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const msg = await login({ ...values, type });
      if (msg.status === 'ok') {
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: '登录成功！',
        });
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as { redirect: string };
        history.push(redirect || '/');
        return;
      }
      console.log(msg);
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });
      message.error(defaultLoginFailureMessage);
    }
  };

  const handle = (user) => {
    console.log('handle!!!!!!');
    const defaultLoginSuccessMessage = intl.formatMessage({
      id: 'pages.login.success',
      defaultMessage: '登录成功！',
    });
    message.success(defaultLoginSuccessMessage);
    fetchUserInfo();
    /** 此方法会跳转到 redirect 参数所在的位置 */
    if (!history) return;
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    history.push(redirect || '/');
    return;
  };

  const components = {
    Header() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image alt="Amplify logo" src="https://docs.amplify.aws/assets/logo-dark.svg" />
        </View>
      );
    },

    Footer() {
      const { tokens } = useTheme();

      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>&copy; All Rights Reserved</Text>
        </View>
      );
    },

    SignIn: {
      Header() {
        const { tokens } = useTheme();

        return (
          <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
            Sign in to your account
          </Heading>
        );
      },
      Footer() {
        const { toResetPassword } = useAuthenticator();

        return (
          <View textAlign="center">
            <Button fontWeight="normal" onClick={toResetPassword} size="small" variation="link">
              Reset Password
            </Button>
          </View>
        );
      },
    },

    SignUp: {
      Header() {
        const { tokens } = useTheme();

        return (
          <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
            Create a new account
          </Heading>
        );
      },
      Footer() {
        const { toSignIn } = useAuthenticator();

        return (
          <View textAlign="center">
            <Button fontWeight="normal" onClick={toSignIn} size="small" variation="link">
              Back to Sign In
            </Button>
          </View>
        );
      },
    },
    ConfirmSignUp: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    SetupTOTP: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    ConfirmSignIn: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    ResetPassword: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
    ConfirmResetPassword: {
      Header() {
        const { tokens } = useTheme();
        return (
          <Heading padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`} level={3}>
            Enter Information:
          </Heading>
        );
      },
      Footer() {
        return <Text>Footer Information</Text>;
      },
    },
  };

  const formFields = {
    signIn: {
      username: {
        placeholder: 'Enter your email',
      },
    },
    signUp: {
      password: {
        label: 'Password:',
        placeholder: 'Enter your Password:',
        isRequired: false,
        order: 2,
      },
      confirm_password: {
        label: 'Confirm Password:',
        order: 1,
      },
    },
    forceNewPassword: {
      password: {
        placeholder: 'Enter your Password:',
      },
    },
    resetPassword: {
      username: {
        placeholder: 'Enter your email:',
      },
    },
    confirmResetPassword: {
      confirmation_code: {
        placeholder: 'Enter your Confirmation Code:',
        label: 'New Label',
        isRequired: false,
      },
      confirm_password: {
        placeholder: 'Enter your Password Please:',
      },
    },
    setupTOTP: {
      QR: {
        totpIssuer: 'test issuer',
        totpUsername: 'amplify_qr_test_user',
      },
      confirmation_code: {
        label: 'New Label',
        placeholder: 'Enter your Confirmation Code:',
        isRequired: false,
      },
    },
    confirmSignIn: {
      confirmation_code: {
        label: 'New Label',
        placeholder: 'Enter your Confirmation Code:',
        isRequired: false,
      },
    },
  };
  return (
    <Authenticator components={components} formFields={formFields}>
      {(user) => handle(user)}
    </Authenticator>
  );
};

export default Login;
