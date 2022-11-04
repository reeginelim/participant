import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Form, Button, Col, Input, Popover, Progress, Row, Select, message, Card } from 'antd';
import type { Store } from 'antd/es/form/interface';
import { Link, useRequest, history } from 'umi';
import type { StateType } from './service';
import { fakeRegister } from './service';

import styles from './index.less';

const FormItem = Form.Item;
const { Option } = Select;
const InputGroup = Input.Group;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 24 },
};

const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      <span>Strong</span>
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      <span>Medium</span>
    </div>
  ),
  poor: (
    <div className={styles.error}>
      <span>Weak</span>
    </div>
  ),
};

const passwordProgressMap: {
  ok: 'success';
  pass: 'normal';
  poor: 'exception';
} = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
};

const Register: FC = () => {
  const [count, setCount]: [number, any] = useState(0);
  const [visible, setVisible]: [boolean, any] = useState(false);
  const [prefix, setPrefix]: [string, any] = useState('86');
  const [popover, setPopover]: [boolean, any] = useState(false);
  const confirmDirty = false;
  let interval: number | undefined;
  const [form] = Form.useForm();

  useEffect(
    () => () => {
      clearInterval(interval);
    },
    [interval],
  );

  const onGetCaptcha = () => {
    let counts = 59;
    setCount(counts);
    interval = window.setInterval(() => {
      counts -= 1;
      setCount(counts);
      if (counts === 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  const getPasswordStatus = () => {
    const value = form.getFieldValue('password');
    if (value && value.length > 9) {
      return 'ok';
    }
    if (value && value.length > 5) {
      return 'pass';
    }
    return 'poor';
  };

  const { loading: submitting, run: register } = useRequest<{ data: StateType }>(fakeRegister, {
    manual: true,
    onSuccess: (data, params) => {
      if (data.status === 'ok') {
        message.success('注册成功！');
        history.push({
          pathname: '/user/register-result',
          state: {
            account: params.email,
          },
        });
      }
    },
  });
  const onFinish = (values: Store) => {
    register(values);
  };

  const checkConfirm = (_: any, value: string) => {
    const promise = Promise;
    if (value && value !== form.getFieldValue('password')) {
      return promise.reject('Password not match!');
    }
    return promise.resolve();
  };

  const checkPassword = (_: any, value: string) => {
    const promise = Promise;
    // 没有值的情况
    if (!value) {
      setVisible(!!value);
      return promise.reject('Please input password!');
    }
    // 有值的情况
    if (!visible) {
      setVisible(!!value);
    }
    setPopover(!popover);
    if (value.length < 6) {
      return promise.reject('');
    }
    if (value && confirmDirty) {
      form.validateFields(['confirm']);
    }
    return promise.resolve();
  };

  const changePrefix = (value: string) => {
    setPrefix(value);
  };

  const renderPasswordProgress = () => {
    const value = form.getFieldValue('password');
    const passwordStatus = getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Card>
          <h3>Register</h3>
          <Form {...layout} form={form} name="UserRegister" onFinish={onFinish}>
            <FormItem
              name="username"
              label="User Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input size="large" placeholder="" />
            </FormItem>
            <FormItem
              name="mail"
              label="Email"
              rules={[
                {
                  required: true,
                  message: 'Plase input email address!',
                },
                {
                  type: 'email',
                  message: 'Wrong email address format!',
                },
              ]}
            >
              <Input size="large" placeholder="" />
            </FormItem>
            <FormItem
              name="firstname"
              label="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input size="large" placeholder="" />
            </FormItem>
            <FormItem
              name="lastname"
              label="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input size="large" placeholder="" />
            </FormItem>
            <FormItem
              name="utility_account"
              label="Utility Account"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input size="large" placeholder="" />
            </FormItem>
            <Popover
              getPopupContainer={(node) => {
                if (node && node.parentNode) {
                  return node.parentNode as HTMLElement;
                }
                return node;
              }}
              content={
                visible && (
                  <div style={{ padding: '4px 0' }}>
                    {passwordStatusMap[getPasswordStatus()]}
                    {renderPasswordProgress()}
                    <div style={{ marginTop: 10 }}>
                      <span>Please use a strong password!</span>
                    </div>
                  </div>
                )
              }
              overlayStyle={{ width: 240 }}
              placement="right"
              visible={visible}
            >
              <FormItem
                name="password"
                label="Password"
                className={
                  form.getFieldValue('password') &&
                  form.getFieldValue('password').length > 0 &&
                  styles.password
                }
                rules={[
                  {
                    required: true,
                    validator: checkPassword,
                  },
                ]}
              >
                <Input size="large" type="password" placeholder="" />
              </FormItem>
            </Popover>
            <FormItem
              name="confirm"
              label="Confirm Password"
              rules={[
                {
                  required: true,
                  message: '',
                },
                {
                  validator: checkConfirm,
                },
              ]}
            >
              <Input size="large" type="password" placeholder="" />
            </FormItem>
            {/* <InputGroup compact>
          <Select size="large" value={prefix} onChange={changePrefix} style={{ width: '20%' }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
          <FormItem
            style={{ width: '80%' }}
            name="mobile"
            rules={[
              {
                required: true,
                message: '请输入手机号!',
              },
              {
                pattern: /^\d{11}$/,
                message: '手机号格式错误!',
              },
            ]}
          >
            <Input size="large" placeholder="手机号" />
          </FormItem>
        </InputGroup> */}
            {/* <Row gutter={8}>
          <Col span={16}>
            <FormItem
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码!',
                },
              ]}
            >
              <Input size="large" placeholder="验证码" />
            </FormItem>
          </Col>
          <Col span={8}>
            <Button
              size="large"
              disabled={!!count}
              className={styles.getCaptcha}
              onClick={onGetCaptcha}
            >
              {count ? `${count} s` : '获取验证码'}
            </Button>
          </Col>
        </Row> */}
            <FormItem>
              <Button
                size="large"
                loading={submitting}
                className={styles.submit}
                type="primary"
                htmlType="submit"
              >
                <span>Submit</span>
              </Button>
              <Link className={styles.login} to="/user/login">
                <span>Have an account? Login</span>
              </Link>
            </FormItem>
          </Form>
        </Card>
      </div>
    </div>
  );
};
export default Register;
