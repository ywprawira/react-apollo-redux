import Link from 'next/link'
import { withRouter } from 'next/router'
import { withRedux } from '../lib/redux';
import { compose } from 'redux';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Button } from '@material-ui/core';

const Nav = ({ router: { pathname } }) => {
  const cart = useSelector((state) => state.cart);
  const cartCount = (cart.cart.length)?cart.cart.reduce((accum,item) => parseInt(accum) + parseInt(item.qty), 0):0

  return (
    <AppBar position="relative">
      <Toolbar>
        <Link href="/">
          <Button size="small">Home</Button>
        </Link>
        <Link href="/cart">
          <Button size="small">My Cart <span className="cart-counter">{cartCount}</span></Button>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default compose(withRedux, withRouter)(Nav)
