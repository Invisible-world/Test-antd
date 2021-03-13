import { Row, Col } from 'antd';
import WriterdetailsLeft from './WriterdetailsLeft';
import WriterdetailsRight from './WriterdetailsRight';

const Writerdetails = () => {
    return (
        <>
        <div style={{marginTop:'3rem'}}>
        <Row justify="space-around">
      <Col span={14} style={{backgroundColor:'green'}}><WriterdetailsLeft /></Col>
      <Col span={6} style={{backgroundColor:'blue'}}><WriterdetailsRight /></Col>
      
    </Row>
        </div>    
        </>
    )
}

export default Writerdetails
