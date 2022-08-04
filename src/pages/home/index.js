import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {requestGetProducts, addProductToCart} from '../../redux/saga/actionSaga'
import * as selectorHome from '../../redux/selectors/HomeSelector'
import * as selectorCart from '../../redux/selectors/CartSelector'
import LayoutComponent from '../../components/Layout'
import { createStructuredSelector } from 'reselect'
import {Row, Col, Skeleton, Card, Button } from 'antd'
import { Link } from "react-router-dom";
import slugify from 'react-slugify';

const { Meta } = Card;
const HomePage = () =>{
    const {loading, errors, products, loadingCart} = useSelector(createStructuredSelector({
        loading: selectorHome.getLoadingHome,
        errors: selectorHome.getErrorHome,
        products: selectorHome.getDataProductState,
        loadingCart: selectorCart.getLoadingCart
    }))
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(requestGetProducts());
    },[dispatch])

    const addCard = id =>{
        dispatch(addProductToCart(id))
    }
    if(loading){
        return(
            <LayoutComponent>
                <Skeleton active />
            </LayoutComponent>
        )
    }
    if(errors !== null){
        return(
            <LayoutComponent>
                <h3>Not found data</h3>
            </LayoutComponent>
        )
    }
    return (
        <LayoutComponent>
            <Row center="xs">
                {products.map((item, index) =>(    
                    <Col sm={24} md={12} lg={8} xl={6} key={index}>
                    <div className="wrap">
                            <Link to={`/${slugify(item.title)}-${item.id}`}>
                                <Card
                                    style={{margin:'0 auto', width: 240 }}
                                    hoverable
                                    cover={<img style={{ height: 270 }} alt={item.title} src={item.image} />}
                                >
                                    <Meta title={item.title} />
                                    <p>Price: {item.price}</p>
                                </Card>
                            </Link>
                            <Button
                                style={{margin: '0 auto', }}
                                type="primary"
                                disabled={loadingCart}
                                onClick={() => addCard(item.id)}
                            >Add card
                            </Button>
                    </div>                                  
                    </Col>
                ))}     
            </Row>
        </LayoutComponent>
    )
}
export default React.memo(HomePage)