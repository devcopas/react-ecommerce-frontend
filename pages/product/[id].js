import Layout from '@common/components/Layout';
import Container from '@material-ui/core/Container';

import ProductDetailCard from '@mobile/components/ProductDetailCard';

const ProductDetail = ({ product }) => {
    const { img, name, price, rating, sold, description, quantity, condition, size, promo } = product;
    return (
        <Layout>
            <Container maxWidth="sm">
                <ProductDetailCard
                    img={img}
                    title={name}
                    price={price}
                    rating={rating}
                    sold={sold}
                    description={description}
                    quantity={quantity}
                    condition={condition}
                    size={size}
                    promo={promo}
                />
            </Container>
        </Layout>
    );
};

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/products');
    const products = await res.json();

    const paths = products.list.map(product => `/product/${product.id}`);

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/product/${params.id}`);
    const product = await res.json();

    return {
        props: {
            product,
        },
    };
}

export default ProductDetail;
