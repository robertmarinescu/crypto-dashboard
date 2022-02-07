import React from 'react'
import HTMLReactParse from 'html-react-parser'
import { useParams } from 'react-router-dom'
import milify from 'millify'
import { Col, Row, Typography, Select } from 'antd'
import { 
  MoneyCollectOutlined, 
  DollarCircleOutlined, 
  FundOutlined, 
  ExclamationCircleOutlined, 
  StopOutlined, 
  TrophyOutlined, 
  CheckOutlined, 
  NumberOutlined, 
  ThunderboltOutlined 
} from '@ant-design/icons';

const { Title, Text } = Typography

const { Option } = Select

const CryptoDetails = () => {
  const { coinId } = useParams()
  return (
    <div>
      CryptoDetails {coinId}
    </div>
  )
}

export default CryptoDetails
