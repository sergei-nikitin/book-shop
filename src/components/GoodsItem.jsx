import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

const GoodsItem = (props) => {
  const { name, price, setOrder, poster, id } = props;

  return (
    <Grid className="item" item xs={2} md={4} key={id}>
      <Card sx={{ height: '100%' }}>
        <div className="wrapperclip">
          <span className="borderclip">
            <CardMedia
              className="imageClip"
              height="180"
              component="img"
              image={poster}
              alt={name}
            />
          </span>
        </div>
        <CardContent>
          <Typography variant="h6" component="p">
            {name}
          </Typography>
          <Typography variant="body1" sx={{ mb: '0.8rem', mt: '0.8rem' }}>
            Цена: {price} грн.
          </Typography>
          <CardActions>
            <Button
              variant="contained"
              onClick={() =>
                setOrder({
                  id: props.id,
                  name: props.name,
                  price: props.price,
                })
              }>
              Купить
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
