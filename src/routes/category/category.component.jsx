import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState, useEffect, Fragment } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/category.selector.js';
import { selectCategoriesIsLoading } from '../../store/categories/category.selector.js';
import Spinner from '../../components/spinner/spinner.component.jsx';
import { CategoryContainer, Title } from './category.styles.jsx'

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);

    }, [category, categoriesMap])

    return (
        <Fragment>
            <Title as='h2'>{category.toUpperCase()}</Title>
            { isLoading ? (
                <Spinner/>
            ) : (
            <CategoryContainer className='CategoryContainer'>
                {products &&
                    products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </CategoryContainer>
    )}
        </Fragment>
    )
};

export default Category