import MenuBar from './Components/MenuBar'
import Header from './Components/Header'
import Input_Output from './Components/Input_Output_File'
import ToolBar from './Components/ToolBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const header = {
    title: 'Quay lại',
    name: 'Phạm Tuấn Kiệt',
    img: 'data:image/png;base64,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',
  }

  const toolbar = [
    {
      id: 1,
      type: 2,
      link: '/product_add',
      title: 'Them san pham'
    },
    {
      id: 2,
      type: 1,
      link: '/product_type',
      title: 'Danh sach san pham'
    }
  ]

  return (
    <div
      className="App"
      style={{
        backgroundColor: '#E9ECEF',
        // padding: 20,
        // display: 'flex',
        // justifyContent: 'flex-end',
      }}
    >

      <Row className='w-100'>
        <Col xs md={2} className='p-0 m-0'>
          <MenuBar id='3' />
        </Col>
        <Col xs md={10} className='p-0 m-0'>
          <Header info={header} />
          <div className='toolbar'>
            <Input_Output />
            <ToolBar array={toolbar} />
          </div>

        </Col>
      </Row>


    </div>
  );
}

export default App;
