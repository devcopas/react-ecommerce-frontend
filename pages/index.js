import Layout from '@common/components/Layout';

const HomePage = ({ products }) => {
    const { list } = products;
    list.map(product => console.log(product.name));

    return (
        <Layout>
            <div>
                {list.map(product => (
                    <p key={product.id}>{product.name}</p>
                ))}
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/products');
    const products = await res.json();

    return {
        props: {
            products,
        },
    };
}

export default HomePage;
