import { useState } from 'react';

// import AppBarComponent from '../appBar';
import Header from './header/Header';
import Basket from './backet';
import Snack from './snack';

import GoodsList from './GoodsList';
// import Search from './Search';

import { goods } from '../data/goods';
import { TextField } from '@mui/material';
import { Container } from '@mui/system';

const App = () => {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(goods);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSnackOpen, setSnackOpen] = useState(false);

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch('');
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        }),
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }
    setSnackOpen(true);
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  return (
    <>
      <Header handleCart={() => setCartOpen(true)} orderLength={order.length} />

      <Container sx={{ mt: '5rem' }}>
        <TextField
          type="search"
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={search}
          onChange={handleChange}
          sx={{ mb: '1rem' }}
        />
        <GoodsList goods={products} setOrder={addToOrder} />
        {/* <BasketList order={order} setOrder={removeFromOrder} /> */}
      </Container>
      <Basket
        order={order}
        removeFromOrder={removeFromOrder}
        cartOpen={isCartOpen}
        closeCart={() => setCartOpen(false)}
      />
      <Snack isOpen={isSnackOpen} handleClose={() => setSnackOpen(false)} />
    </>
  );
};

export default App;
