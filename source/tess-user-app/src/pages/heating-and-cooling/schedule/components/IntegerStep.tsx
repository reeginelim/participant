import { Row, Col, InputNumber, Slider } from 'antd';
import { SliderMarks } from 'antd/lib/slider';
import { useState } from 'react';
const IntegerStep = ({
  minVal,
  maxVal,
  marks,
}: {
  minVal: number;
  maxVal: number;
  marks?: SliderMarks;
}) => {
  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue: number) => {
    setInputValue(newValue);
  };

  return (
    <Row>
      <Col span={11}>
        <Slider
          marks={marks}
          min={minVal}
          max={maxVal}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={1}></Col>
      <Col span={4}>
        <InputNumber
          min={minVal}
          max={maxVal}
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export default IntegerStep;
