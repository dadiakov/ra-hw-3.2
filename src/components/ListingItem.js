import PropTypes from 'prop-types';

export default function ListingItem({ id, url, img, title, currencyCode, price, quantity }) {
    let newTitle = '';
    if (title.length > 50) {
      newTitle = title.substring(0, 50) + '...';
    }
  
    const currency = {
      'USD': '$',
      'EUR': '€'
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
            {currency[currencyCode]}
            {price}
            {!currency[currencyCode] && ' ' + currencyCode}
          </p>
          <p className={'item-quantity ' + qtyLevel}>{quantity} left</p>
        </div>
      </div>
    );
  }
  
  ListingItem.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string,
    img: PropTypes.object,
    title: PropTypes.string,
    currencyCode: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  };

  ListingItem.defaultProps = {
    url: '#',
    img: {url_570xN: 'https://m.sobaka.ru/system/inline_image/image/00/00/87/28/base_1122.jpg'},
    title: 'Похоже, тут должно быть описание...',
    currencyCode: 'усл.ед',
    price: '???',
    quantity: 1,
  }