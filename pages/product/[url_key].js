import Layout from "../../components/Layout";
import { withApollo } from "../../lib/apollo";
import { withRedux } from "../../lib/redux";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import { PRODUCT_BY_KEY } from "../../data/product";
import Price from "../../components/Price";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/action/actionCart';
import { compose } from "redux";
import { Grid, TextField, Paper, Button, CircularProgress } from "@material-ui/core";


const Product = () => {
  const pageConfig = {
    title: "PDP",
  };
  const [qty=1, setQty] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const { url_key } = router.query;
  const { loading, data } = useQuery(PRODUCT_BY_KEY, {
    variables: {
      url_key: url_key,
    },
  });

  if (loading) {
    return (
      <div className="loading">Wait ...</div>
    );
  }

  const handleQty = (e) => {
      setQty(e.target.value)
  }

  const handleAddtoCart = (e) => {
      e.preventDefault();

      const item = {
        id: product.id,
        qty: parseInt(qty),
        product: {
            name: product.name,
            image: <img src={product.image.url} alt={product.image.label} />,
            price: <Price price={product.price_range.minimum_price}/>,
            sku: product.sku
        }
      }

      dispatch(addToCart(item))
  }

  const product = data.products.items[0];
  pageConfig.title = product.name;

  return (
    <Layout pageConfig={pageConfig}>
      {(loading)?<CircularProgress />:
      <Grid container spacing={3}>
        <Grid item sm={5}>
          <section>
              <img className="image-product" src={product.image.url} alt={product.image.label} />
          </section>
        </Grid> 
        <Grid item sm={7}>
          <div>
            <section className="section product-info">
              <h1>{product.name}</h1>
              <Price price={product.price_range.minimum_price} />
            </section>
            <section>
                <form id={`add-to-cart-${product.id}`} onSubmit={handleAddtoCart}>
                    <TextField required label="Quantity" defaultValue={qty} id="qty" onChange={handleQty} />
                    <Button variant="contained" type="submit"> Add to Cart</Button>
                </form>
            </section>
            <section className="section product-description">
              <h4>Description</h4>
              <div dangerouslySetInnerHTML={{__html: product.description.html}}></div>
            </section>
          </div>
        </Grid>
      </Grid>
      }
    </Layout>
  )
};

export default compose(withApollo, withRedux)(Product);
