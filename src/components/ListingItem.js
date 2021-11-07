import PropTypes from 'prop-types';

export default function ListingItem({ id, url, img, title, currencyCode, price, quantity }) {
    if (!(url && img && title && currencyCode && price && quantity)) return null;
    let newTitle = '';
    if (title.length > 50) {
      newTitle = title.substring(0, 50) + '...';
    }
  
    let newCurrency = '';
    if (currencyCode === 'USD') {
      newCurrency = '$';
    } else if (currencyCode === 'EUR') {
      newCurrency = '€';
    }
  
    let qtyLevel = '';
    quantity < 10
      ? (qtyLevel = 'level-low')
      : quantity > 20
      ? (qtyLevel = 'level-high')
      : (qtyLevel = 'level-medium');
  
    return (
      <div className="item" id={id}>
        <div className="item-image">
          <a href={url}>
            <img src={img.url_570xN} alt="" />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{newTitle || title}</p>
          <p className="item-price">
            {newCurrency}
            {price}
            {!newCurrency && ' ' + currencyCode}
          </p>
          <p className={'item-quantity ' + qtyLevel}>{quantity} left</p>
        </div>
      </div>
    );
  }
  
  ListingItem.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    currencyCode: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  };