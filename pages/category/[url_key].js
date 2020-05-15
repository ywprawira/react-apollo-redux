import { useRouter } from "next/router";
import { withApollo } from "../../lib/apollo";
import { useQuery } from '@apollo/react-hooks';
import Layout from "../../components/Layout";
import { CATEGORY_BY_KEY } from "../../data/category";
import styled from "styled-components";
import ContainerCategoryList from "../../components/ContainerCategoryList";
import Price from "../../components/Price";
import { Grid, Typography } from "@material-ui/core";
import CategoryList from "../../components/CategoryList";

const Category = () => {
    let pageConfig = {
        title: 'Category'
    }

    const router = useRouter();
    const {url_key} = router.query;
    const {loading,data} = useQuery(
        CATEGORY_BY_KEY,
        {
            variables: {
                url_key: url_key
            }
        }
    )

    if(loading) 
        return <div className="loading">Loading ...</div>
    
    const category = data.categoryList[0];
    const products = (category.products.items)?category.products.items:null;
    
    return (
        <Layout pageConfig={pageConfig}>
            <section className="banner">
                {category.image_path?`<img src=${category.image_path} />`:''}
            </section>
            <section>
                <Typography variant="h1">{category.name}</Typography>
                {category.description}
            </section>
            <section className="child-category">
                <CategoryList categoryData={category.children} />
            </section>
            <section className="product-list">
                <h3>Products</h3>
                <Grid container className="product-items" spacing={3}>
                    {(products)?products.map((product)=> (
                        <Grid item key={product.id} xs={6} sm={6} md={4}>
                        <ContainerCategoryList 
                            key={product.id} 
                            cardClass="product-item" 
                            title={product.name} 
                            image={product.small_image.url}
                            content={<Price price={product.price_range.minimum_price} showDiscount={true} />}
                            link={
                                {
                                    label:"Detail",
                                    href:"/product/[url_key]",
                                    as:`/product/${product.url_key}`
                                }
                            } 
                        />
                        </Grid>
                    )):<Grid item xs={6} sm={6} md={4}><ContainerCategoryList cardClass="no-products" content="Produk nya noting" /></Grid>}
                </Grid>
            </section>
        </Layout>
    );
};

export default (withApollo)(Category);
